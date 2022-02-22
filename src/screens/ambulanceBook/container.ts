import {useCallback, useEffect, useState} from 'react';
import {PermissionsAndroid, Platform, ToastAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const dummyCords = [
  {
    latitude: 16.98675,
    longitude: 74.620028,
    latitudeDelta: 0.007,
    longitudeDelta: 0.007,
  },
  {
    latitude: 16.9848,
    longitude: 74.621111,
    latitudeDelta: 0.007,
    longitudeDelta: 0.007,
  },
  {
    latitude: 16.982738,
    longitude: 74.62007,
    latitudeDelta: 0.007,
    longitudeDelta: 0.007,
  },
  {
    latitude: 16.985416,
    longitude: 74.619351,
    latitudeDelta: 0.007,
    longitudeDelta: 0.007,
  },
];

interface PositionState {
  loading: boolean;
  position: Geolocation.GeoPosition | null;
  error: Geolocation.GeoError | null;
}
const useAmbulanceBook = () => {
  const [currentPosition, setCurrentPosition] = useState<PositionState>({
    loading: true,
    position: null,
    error: null,
  });
  useEffect(() => {
    getCurrentGeoLocation().then;
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
  const handleBookAmbulance = useCallback(() => {}, []);
  return {
    currentPosition,
    handleBookAmbulance,
    dummyCords,
  };
};

export default useAmbulanceBook;
