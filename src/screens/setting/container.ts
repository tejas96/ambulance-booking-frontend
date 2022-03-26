import {useCallback} from 'react';
import {useRecoilState} from 'recoil';
import {LoggedInUser} from '../../redux/atoms';
import {useSession, useSocket} from '../../hooks';

const useSetting = () => {
  const session = useSession();
  const {socket} = useSocket();
  const [loggedInUser] = useRecoilState(LoggedInUser.loggedInUser);
  const handleLogout = useCallback(() => {
    if (session.user) {
      socket?.emit('deleteUser', {
        userId: session.user.uid,
        userRole: loggedInUser?.useRole,
      });
      session.logout();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session.user]);
  return {
    handleLogout,
  };
};

export default useSetting;
