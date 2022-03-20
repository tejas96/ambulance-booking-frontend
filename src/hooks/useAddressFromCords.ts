import {useCallback, useState} from 'react';
import Config from 'react-native-config';
import {Location} from '../model';

const {GOOGLE_MAP_API_KEY} = Config;
interface GeolocationState {
  loading: boolean;
  data: Location | null;
  error: any;
}
interface GoogleApiResponseModel {
  results: Array<{
    formatted_address: string;
    address_components: Array<{
      long_name: string;
      short_name: string;
      types: Array<string>;
    }>;
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
  }>;
}

const useAddressFromCords = (): [
  (lat: number, lng: number) => Promise<void>,
  GeolocationState,
] => {
  const [addressState, setAddressState] = useState<GeolocationState>({
    loading: true,
    data: null,
    error: null,
  });

  const getAddress = useCallback(async (lat: number, lng: number) => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAP_API_KEY}`,
    );
    const data = await response.json();
    const convertedLocation = __convertGoogleApiResponseToLocation(data);
    setAddressState({
      data: convertedLocation,
      loading: false,
      error: convertedLocation ? null : 'Error',
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) as (lat: number, lng: number) => Promise<void>;

  const __convertGoogleApiResponseToLocation = useCallback(
    (rawLocationData: GoogleApiResponseModel) => {
      const result = rawLocationData.results;
      if (
        result &&
        result.length > 0 &&
        result[0].address_components &&
        result[0].address_components.length > 0
      ) {
        const {
          address_components,
          geometry: {location},
        }: {
          address_components: Array<{
            long_name: string;
            short_name: string;
            types: Array<string>;
          }>;
          geometry: {
            location: {
              lat: number;
              lng: number;
            };
          };
        } = rawLocationData.results[0];

        const city = address_components.find(component =>
          component.types.includes('administrative_area_level_2'),
        );
        const locality = address_components.find((component: any) =>
          component.types.includes('locality'),
        );
        const state = address_components.find((component: any) =>
          component.types.includes('administrative_area_level_1'),
        );
        const country = address_components.find((component: any) =>
          component.types.includes('country'),
        );
        const postalCode = address_components.find((component: any) =>
          component.types.includes('postal_code'),
        );
        const locationData: Location = {
          latitude: location.lat,
          longitude: location.lng,
          city: city ? city.long_name : '',
          state: state ? state.long_name : '',
          country: country ? country.long_name : '',
          pinCode: postalCode ? postalCode.long_name : '',
          locality: locality ? locality.long_name : '',
        };
        return locationData;
      } else {
        return null;
      }
    },
    [],
  ) as (rawLocationData: GoogleApiResponseModel) => Location | null;

  return [getAddress, addressState];
};
export default useAddressFromCords;
