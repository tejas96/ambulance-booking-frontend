import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {UserRole} from '../../model';
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
      if (user.role === UserRole.PASSENGER) {
        navigation.replace(Routes.AMBULANCE_BOOKING);
      } else {
        navigation.replace(Routes.AMBULANCE_BOOKING);
      }
    } else if (!loading) {
      navigation.replace(Routes.REGISTER_STACK);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, user]);

  return <Loader isLoading={true}>null</Loader>;
};

export default SplashScreen;
