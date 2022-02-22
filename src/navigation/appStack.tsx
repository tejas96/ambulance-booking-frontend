import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, SplashScreen, AmbulanceBooking} from '../screens';
import {AppStackParamList} from './AppStackParamsList';
import RegisterNavigationStack from './registerNavigationStack';
import {Routes} from '.';

const Stack = createNativeStackNavigator<AppStackParamList>();
const AppStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={Routes.SPLASH_SCREEN}>
      <Stack.Screen name={Routes.SPLASH_SCREEN} component={SplashScreen} />
      <Stack.Screen name={Routes.HOME} component={Home} />
      <Stack.Screen
        name={Routes.REGISTER_STACK}
        component={RegisterNavigationStack}
      />
      <Stack.Screen
        name={Routes.AMBULANCE_BOOKING}
        component={AmbulanceBooking}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
