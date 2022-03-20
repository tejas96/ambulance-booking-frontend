import {useEffect, useRef} from 'react';
import MapView from 'react-native-maps';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useAddressFromCords, useGeoLocation} from '../../hooks';

const useDriver = () => {
  const {currentPosition} = useGeoLocation();
  const [getAddress, state] = useAddressFromCords();
  const mapRef = useRef<MapView>();
  const passengerSheet = useRef<RBSheet>(null);

  useEffect(() => {
    if (!currentPosition.loading && currentPosition.position) {
      getAddress(
        currentPosition.position.coords.latitude,
        currentPosition.position.coords.longitude,
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPosition.loading]);

  return {
    mapRef,
    state,
    passengerSheet,
  };
};

export default useDriver;
