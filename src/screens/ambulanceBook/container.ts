import {useCallback} from 'react';
import {useGeoLocation} from '../../hooks';

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

const useAmbulanceBook = () => {
  const geoLocation = useGeoLocation();
  const handleBookAmbulance = useCallback(() => {}, []);
  return {
    currentPosition: geoLocation.currentPosition,
    handleBookAmbulance,
    dummyCords,
  };
};

export default useAmbulanceBook;
