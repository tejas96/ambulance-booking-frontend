import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Routes} from '.';
import {
  AmbulanceBooking,
  DriverLandingScreen,
  HospitalRegistration,
  SplashScreen,
} from '../screens';
import {AppStackParamList} from './AppStackParamsList';
import RegisterNavigationStack from './registerNavigationStack';
import TabNavigation from './tabNavigation';

const Stack = createNativeStackNavigator<AppStackParamList>();
const AppStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={Routes.SPLASH_SCREEN}>
      <Stack.Screen name={Routes.SPLASH_SCREEN} component={SplashScreen} />
      <Stack.Screen name={Routes.HOME_STACK} component={TabNavigation} />
      <Stack.Screen
        name={Routes.REGISTER_STACK}
        component={RegisterNavigationStack}
      />
      <Stack.Screen
        name={Routes.AMBULANCE_BOOKING}
        component={AmbulanceBooking}
      />
      <Stack.Screen
        name={Routes.HOSPITAL_REGISTRATION}
        component={HospitalRegistration}
      />
      <Stack.Screen
        name={Routes.DRIVER_LANDING_SCREEN}
        component={DriverLandingScreen}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
