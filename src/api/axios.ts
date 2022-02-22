import axios from 'axios';
import auth from '@react-native-firebase/auth';
import {Logger} from '../utils';

//API timeout in seconds
const API_TIMEOUT = 10;

const server = axios.create({
  timeout: API_TIMEOUT * 1000,
});

server.interceptors.request.use(
  async config => {
    const currentUser = auth().currentUser;
    if (currentUser) {
      const token = await currentUser.getIdToken(true);
      return {
        ...config,
        headers: {
          ...config.headers,
          authorization: `Bearer ${token}`,
        },
      };
    }
    return config;
  },
  error => {
    Logger.error(
      `Error occurred while sending data. Message = ${error.message}`,
    );
    return Promise.reject(error);
  },
);

export default server;
