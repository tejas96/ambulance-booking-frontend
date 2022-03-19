import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Routes} from '.';

export type AppStackParamList = {
  [Routes.HOME]: undefined;
  [Routes.PROFILE]: undefined;
  [Routes.SETTINGS]: undefined;
  [Routes.SPLASH_SCREEN]: undefined;
  [Routes.REGISTER_STACK]: undefined;
  [Routes.ONBOARDING]: undefined;
  [Routes.AMBULANCE_BOOKING]: undefined;
  [Routes.HOSPITAL_REGISTRATION]: undefined;
  [Routes.DRIVER_LANDING_SCREEN]: undefined;
  [Routes.LOGOUT]: undefined;
  [Routes.PASSENGER_STACK]: undefined;
  [Routes.DRIVER_STACK]: undefined;
  [Routes.ABOUT]: undefined;
};

export type NavigationProps = NativeStackNavigationProp<AppStackParamList>;
