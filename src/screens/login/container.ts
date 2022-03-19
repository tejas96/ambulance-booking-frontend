import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useSession} from '../../hooks';
import {Routes} from '../../navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Storage} from '../../utils';
import {LoginStackParamList} from '../../navigation/authStack';

const useAuthContainer = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<LoginStackParamList>>();
  const session = useSession();
  const [componentState, setComponentState] = useState({
    userPhoneNumber: '',
  });
  const [errors, setErrors] = useState<{userPhoneNumber: string}>({
    userPhoneNumber: '',
  });

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      await Storage.setStorage('onboarding', true);
    })();
  }, []);

  const handleLogin = () => {
    setLoading(true);
    session
      .login(`+91${componentState.userPhoneNumber}`)
      .then(() => {
        navigation.navigate(Routes.OTP, {
          phoneNumber: componentState.userPhoneNumber,
        });
        setLoading(false);
      })
      .catch(err => {
        if (err.code === 'auth/invalid-phone-number') {
          setErrors({
            userPhoneNumber: 'Invalid phone number',
          });
        } else {
          setErrors({
            userPhoneNumber: err.message,
          });
        }
        setLoading(false);
      });
  };
  const handleComponentStateChange = (key: string, value: any) => {
    setComponentState({...componentState, [key]: value});
  };
  return {
    handleLogin,
    componentState,
    handleComponentStateChange,
    errors,
    loading,
  };
};
export default useAuthContainer;
