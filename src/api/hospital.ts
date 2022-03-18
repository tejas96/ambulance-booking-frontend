import axios from './axios';
import Config from 'react-native-config';
const {BASE_URL} = Config;
import {HospitalRegistration, Response} from '../model';
import {AxiosResponse} from 'axios';

export function registerHospital(
  hospital: HospitalRegistration,
): Promise<AxiosResponse<string>> {
  return axios.post(`${BASE_URL}/api/v1/hospital/register`, hospital);
}

export function getHospitalsListByCityName(
  cityName: string,
): Promise<AxiosResponse<Response>> {
  return axios.get(`${BASE_URL}/api/v1/hospital/`, {
    params: {
      city: cityName,
    },
  });
}
