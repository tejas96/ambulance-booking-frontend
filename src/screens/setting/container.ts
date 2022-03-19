import {useCallback} from 'react';
import {useSession} from '../../hooks';

const useSetting = () => {
  const session = useSession();
  const handleLogout = useCallback(() => {
    session.logout();
  }, [session]);
  return {
    handleLogout,
  };
};

export default useSetting;
