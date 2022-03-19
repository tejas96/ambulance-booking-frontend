import {useEffect, useState} from 'react';
import {UserAPI} from '../api';
import {User} from '../model';
import {Logger} from '../utils';
interface UserState {
  user?: User | null;
  error?: string | null;
  loading: boolean;
}

const useLoggedInUser = () => {
  const [state, setState] = useState<UserState>({loading: true});

  const loadUser = () => {
    UserAPI.getCurrentUser()
      .then(response => {
        setState({
          user: response.data,
          error: null,
          loading: false,
        });
      })
      .catch(error => {
        Logger.error(error);
        setState({
          user: null,
          error: error.message,
          loading: false,
        });
      });
  };
  useEffect(loadUser, []);

  return state;
};

export default useLoggedInUser;
