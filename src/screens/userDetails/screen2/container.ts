import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {useState} from 'react';
import {AppStackParamList} from '../../../navigation/AppStackParamsList';
import {UserAPI} from '../../../api';
import {useSession} from '../../../hooks';
import {User, UserRole} from '../../../model';
import {RegisterStackParamList} from '../../../navigation/registerNavigationStack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const useContainer = () => {
  type RoutesProps = RouteProp<RegisterStackParamList, 'UserDetailsInfo'>;
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const router = useRoute<RoutesProps>();
  const [loader, setLoader] = useState<boolean>(false);
  const {user: authUser} = useSession();
  const [userState, setUserState] = useState<User>({
    firstName: '',
    lastName: '',
    useRole: router.params.role,
    gender: 'male',
    phoneNumber: '',
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
    await UserAPI.saveUser(user)
      .then(() => {
        setLoader(false);
        if (user.useRole === UserRole.DRIVER)
          navigation.navigate('DriverStack');
        else navigation.navigate('PassengerStack');
      })
      .catch(error => {
        console.log(error);
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
