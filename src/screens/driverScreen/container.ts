import {useCallback, useEffect, useRef, useState} from 'react';
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
import {Driver, LocationAtoms, LoggedInUser} from '../../redux/atoms';
const useDriver = () => {
  const {currentPosition, watchPosition} = useGeoLocation();
  const [getAddress, state] = useAddressFromCords();
  const [currentCity] = useRecoilState(LocationAtoms.currentCity);
  const [loggedInUser] = useRecoilState(LoggedInUser.loggedInUser);
  const [ambulanceBookingRequest] = useRecoilState(Driver.ambulanceBookRequest);
  const {socket} = useSocket();
  const mapRef = useRef<MapView>();
  const passengerSheet = useRef<RBSheet>(null);
  const [bookingDetails, setBookingDetails] = useState({
    pickUpLocation: 'null',
    dropLocation: 'null',
    loading: false,
  });

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
    if (user && loggedInUser && currentPosition.position) {
      const socketUser: SocketUser = {
        userId: user.uid,
        name: `${loggedInUser.firstName} ${loggedInUser.lastName}`,
        city: currentCity || '',
        userRole: loggedInUser.useRole,
        lat: currentPosition.position.coords.latitude || 0,
        long: currentPosition.position.coords.longitude || 0,
        room: currentCity || '',
        phoneNumber: user.phoneNumber || '',
      };
      socket?.emit('room', socketUser);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPosition, user, loggedInUser]);
  useEffect(() => {
    if (ambulanceBookingRequest) {
      setBookingDetails(prev => ({
        ...prev,
        loading: true,
      }));
      getAddress(
        ambulanceBookingRequest.bookingLocation?.latitude || 0,
        ambulanceBookingRequest.bookingLocation?.longitude || 0,
      ).then(pickUpLocation => {
        const hospital = ambulanceBookingRequest.hospital;
        setBookingDetails({
          loading: false,
          pickUpLocation: `${pickUpLocation?.locality}, ${pickUpLocation?.city}, ${pickUpLocation?.pinCode}`,
          dropLocation: `${hospital?.hospitalName}, ${hospital?.location?.locality}, ${hospital?.location?.pinCode}`,
        });
      });
      passengerSheet.current?.open();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ambulanceBookingRequest]);
  const handleRequest = useCallback((requestState: 'Accept' | 'Reject') => {
    if (requestState === 'Accept') {
    } else {
    }
  }, []);
  useEffect(() => {
    watchPosition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    mapRef,
    state,
    passengerSheet,
    ambulanceBookingRequest,
    bookingDetails,
    handleRequest,
  };
};

export default useDriver;
