import {useContext} from 'react';
import {AuthContext} from '../providers';

const useSession = () => {
  const authContext = useContext(AuthContext);
  return authContext;
};

export default useSession;
