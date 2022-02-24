import {useCallback, useEffect, useRef, useState} from 'react';
import MapView, {Address, MapEvent} from 'react-native-maps';
import {HospitalAPI} from '../../api';
import {HospitalRegistration, Location} from 'src/model';
import {useGeoLocation} from '../../hooks';

const useHospitalRegistration = () => {
  const mapRef = useRef<MapView>(null);
  const {currentPosition} = useGeoLocation();
  const [apiLoading, setApiLoading] = useState<boolean>();
  const [registrationForm, setRegistrationForm] =
    useState<HospitalRegistration>({
      hospitalName: '',
      description: '',
      location: {
        latitude: 0,
        longitude: 0,
      },
    });

  useEffect(() => {
    if (currentPosition.position) {
      const {longitude, latitude} = currentPosition.position.coords;
      mapRef.current?.animateToRegion(
        {
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
        0,
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPosition]);

  const onMarkerPlace = (event: MapEvent) => {
    const {latitude, longitude} = event.nativeEvent.coordinate;

    mapRef.current
      ?.addressForCoordinate({latitude, longitude})
      .then((address: Address) => {
        const location: Location = {
          latitude,
          longitude,
          city: address.subAdministrativeArea,
          state: address.administrativeArea,
          country: address.country,
          pinCode: address.postalCode,
          locality: address.locality,
        };
        setRegistrationForm(prev => ({
          location,
          hospitalName: prev?.hospitalName || '',
          description: prev?.description || '',
          id: prev?.id || '',
        }));
      })
      .catch(error => {
        console.log(error);
      });
  };
  const onSubmit = useCallback(async () => {
    setApiLoading(true);
    HospitalAPI.registerHospital(registrationForm)
      .then(() => {
        setApiLoading(false);
      })
      .catch(() => {
        setApiLoading(false);
      });
  }, [registrationForm]);
  return {
    registrationForm,
    setRegistrationForm,
    currentPosition,
    mapRef,
    onMarkerPlace,
    onSubmit,
    apiLoading,
  };
};

export default useHospitalRegistration;
