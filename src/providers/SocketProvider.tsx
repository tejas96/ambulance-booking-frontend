import React, {createContext, useEffect} from 'react';
import Config from 'react-native-config';
import {useRecoilState} from 'recoil';
import io, {Socket} from 'socket.io-client';
import {Driver, LocationAtoms} from '../redux/atoms';
import {useSession} from '../hooks';
import {BookingModal, userIdListenerPayload} from '../model';

const {SOCKET_URL} = Config;
interface SocketProviderProps {
  children: React.ReactNode;
}
interface SocketProviderContextModel {
  socket: Socket | null;
}

export const SocketContext = createContext<SocketProviderContextModel>({
  socket: null,
});

const SocketProvider: React.FC<SocketProviderProps> = ({children}) => {
  const [socket, setSocket] = React.useState<Socket | null>(null);
  const {user} = useSession();
  const [_, setJoinedUsers] = useRecoilState(LocationAtoms.joinedUsers);
  const [__, setAmbulanceBookRequest] = useRecoilState(
    Driver.ambulanceBookRequest,
  );
  useEffect(() => {
    if (user) {
      if (!socket?.connected) {
        const socketObject = io(SOCKET_URL, {
          transports: ['websocket'],
          upgrade: false,
        });
        setSocket(socketObject);
        socketObject.on(user.uid, (payload: userIdListenerPayload) => {
          switch (payload.type) {
            case 'booking':
              setAmbulanceBookRequest(payload.payload as BookingModal);
              break;
            case 'tracking':
              break;
            default:
              break;
          }
        });
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (socket) {
      socket.on('users', data => {
        setJoinedUsers(data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  const connect = () => {
    if (socket) {
      socket.connect();
    }
  };
  const value = {
    socket,
    connect,
  };
  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
};

export default SocketProvider;
