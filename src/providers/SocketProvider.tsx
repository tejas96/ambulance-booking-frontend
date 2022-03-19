import React, {createContext, useEffect} from 'react';
import io, {Socket} from 'socket.io-client';
import Config from 'react-native-config';

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
  useEffect(() => {
    const socketObject = io(SOCKET_URL);
    setSocket(socketObject);
  }, []);

  const value = {
    socket,
  };
  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
};

export default SocketProvider;
