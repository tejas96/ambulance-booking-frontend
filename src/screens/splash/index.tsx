import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {Loader} from '../../components';
import {useLoggedInUser} from '../../hooks';
import {Routes} from '../../navigation';
import {AppStackParamList} from '../../navigation/AppStackParamsList';

const SplashScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const {user, loading} = useLoggedInUser();
  useEffect(() => {
    if (user) {
      navigation.replace(Routes.HOSPITAL_REGISTRATION);
    } else if (!loading) {
      navigation.replace(Routes.REGISTER_STACK);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, user]);

  return <Loader isLoading={true}>null</Loader>;
};

export default SplashScreen;
