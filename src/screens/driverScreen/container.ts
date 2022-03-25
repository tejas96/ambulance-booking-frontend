import {useEffect, useRef} from 'react';
import MapView from 'react-native-maps';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useRecoilState} from 'recoil';
import {
  useAddressFromCords,
  useGeoLocation,
  useSession,
  useSocket,
} from '../../hooks';
import {SocketUser} from '../../model';
import {LocationAtoms, LoggedInUser} from '../../redux/atoms';
const useDriver = () => {
  const {currentPosition, watchPosition} = useGeoLocation();
  const [getAddress, state] = useAddressFromCords();
  const [currentCity] = useRecoilState(LocationAtoms.currentCity);
  const [loggedInUser] = useRecoilState(LoggedInUser.loggedInUser);
  const {socket} = useSocket();
  const mapRef = useRef<MapView>();
  const passengerSheet = useRef<RBSheet>(null);

  const {user} = useSession();

  useEffect(() => {
    if (!currentPosition.loading && currentPosition.position) {
      getAddress(
        currentPosition.position.coords.latitude,
        currentPosition.position.coords.longitude,
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPosition.loading]);

  useEffect(() => {
    if (user && loggedInUser) {
      const socketUser: SocketUser = {
        userId: user.uid,
        name: `${loggedInUser.firstName} ${loggedInUser.lastName}`,
        city: currentCity || '',
        userRole: loggedInUser.useRole,
        lat: currentPosition.position?.coords.latitude || 0,
        long: currentPosition.position?.coords.longitude || 0,
        room: currentCity || '',
      };
      socket?.emit('room', socketUser);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPosition]);

  useEffect(() => {
    watchPosition();
  }, []);
  return {
    mapRef,
    state,
    passengerSheet,
  };
};

export default useDriver;
