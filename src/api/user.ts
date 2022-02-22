import {User} from '../model';
import {AxiosResponse} from 'axios';
import axios from './axios';

const BASE_URL = 'http://192.168.43.230:8085';

export function getCurrentUser(): Promise<AxiosResponse<User>> {
  return axios.get<User>(`${BASE_URL}/api/v1/user/getUser`);
}

export function saveUser(user: User): Promise<AxiosResponse> {
  return axios.post(`${BASE_URL}/api/v1/user/register`, user);
}
