import {User} from '../model';
import {AxiosResponse} from 'axios';
import axios from './axios';
import Config from 'react-native-config';
const {BASE_URL} = Config;
console.log(BASE_URL);
export function getCurrentUser(): Promise<AxiosResponse<User>> {
  return axios.get<User>(`${BASE_URL}/api/v1/user/getUser`);
}

export function saveUser(user: User): Promise<AxiosResponse> {
  return axios.post(`${BASE_URL}/api/v1/user/register`, user);
}
