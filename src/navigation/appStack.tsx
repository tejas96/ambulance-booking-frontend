import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Routes} from '.';
import {HospitalRegistration, SplashScreen, About} from '../screens';
import {AppStackParamList} from './AppStackParamsList';
import DriverNavigation from './driverNavigation';
import RegisterNavigationStack from './registerNavigationStack';
import PassengerNavigation from './passengerNavigation';
const Stack = createNativeStackNavigator<AppStackParamList>();
const AppStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={Routes.SPLASH_SCREEN}>
      <Stack.Screen name={Routes.SPLASH_SCREEN} component={SplashScreen} />
      <Stack.Screen
        name={Routes.PASSENGER_STACK}
        component={PassengerNavigation}
      />
      <Stack.Screen name={Routes.DRIVER_STACK} component={DriverNavigation} />
      <Stack.Screen
        name={Routes.REGISTER_STACK}
        component={RegisterNavigationStack}
      />
      <Stack.Screen
        name={Routes.HOSPITAL_REGISTRATION}
        component={HospitalRegistration}
      />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name={Routes.ABOUT}
        component={About}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
