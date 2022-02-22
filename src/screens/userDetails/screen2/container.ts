import {RouteProp, useRoute} from '@react-navigation/native';
import {useState} from 'react';
import {UserAPI} from '../../../api';
import {useSession} from '../../../hooks';
import {User} from '../../../model';
import {RegisterStackParamList} from '../../../navigation/registerNavigationStack';

const useContainer = () => {
  type RoutesProps = RouteProp<RegisterStackParamList, 'UserDetailsInfo'>;
  const router = useRoute<RoutesProps>();
  const [loader, setLoader] = useState<boolean>(false);
  const {user: authUser} = useSession();
  const [userState, setUserState] = useState<User>({
    firstName: '',
    lastName: '',
    role: router.params.role,
    gender: '',
  });

  const handleOnChange = (key: string, value: any) => {
    setUserState(() => ({
      ...userState,
      [key]: value,
    }));
  };
  const handleFormSubmit = async () => {
    setLoader(true);
    const user = <User>{...userState, phoneNumber: authUser?.phoneNumber};
    console.log('user', user);
    await UserAPI.saveUser(user)
      .then(() => {})
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoader(false);
      });
  };
  return {
    userState,
    handleOnChange,
    handleFormSubmit,
    loader,
  };
};

export default useContainer;
