import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {Loader} from '../../components';
import {
  useAddressFromCords,
  useGeoLocation,
  useLoggedInUser,
} from '../../hooks';
import {UserRole} from '../../model';
import {Routes} from '../../navigation';
import {AppStackParamList} from '../../navigation/AppStackParamsList';
import {LocationAtoms, LoggedInUser} from '../../redux/atoms';

const SplashScreen: React.FC = () => {
  const [_, setCurrentCity] = useRecoilState(LocationAtoms.currentCity);
  const [__, setLoggedInUser] = useRecoilState(LoggedInUser.loggedInUser);
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const {user, loading} = useLoggedInUser();
  const [getAddress] = useAddressFromCords();
  const {currentPosition} = useGeoLocation();

  useEffect(() => {
    if (user && !currentPosition.loading && currentPosition.position) {
      setLoggedInUser(user);
      getAddress(
        currentPosition.position.coords.latitude,
        currentPosition.position.coords.longitude,
      ).then(res => {
        setCurrentCity(res?.city || '');
        if (user.useRole === UserRole.PASSENGER) {
          navigation.replace(Routes.PASSENGER_STACK);
          // navigation.replace(Routes.TRACKING);
        } else {
          navigation.replace(Routes.DRIVER_STACK);
        }
      });
    } else if (!loading) {
      navigation.replace(Routes.REGISTER_STACK);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, user, currentPosition.loading]);

  return <Loader isLoading={true}>null</Loader>;
};

export default SplashScreen;
