import {useCallback, useEffect, useState} from 'react';
import {PermissionsAndroid, Platform, ToastAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

interface PositionState {
  loading: boolean;
  position: Geolocation.GeoPosition | null;
  error: Geolocation.GeoError | null;
}

const useGeoLocation = () => {
  const [currentPosition, setCurrentPosition] = useState<PositionState>({
    loading: true,
    position: null,
    error: null,
  });
  useEffect(() => {
    getCurrentGeoLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCurrentGeoLocation = useCallback(async () => {
    if (Platform.OS === 'android') {
      const permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (permission === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          (position: Geolocation.GeoPosition) => {
            setCurrentPosition({
              loading: false,
              position,
              error: null,
            });
          },
          error => {
            setCurrentPosition({
              loading: false,
              position: null,
              error: error,
            });
            ToastAndroid.show(error.message, ToastAndroid.SHORT);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    }
  }, []);

  return {currentPosition, getCurrentGeoLocation};
};

export default useGeoLocation;
