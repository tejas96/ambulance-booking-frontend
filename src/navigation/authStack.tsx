import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, SignUp, OTP, Onboarding} from '../screens';
import {Routes} from '.';

export type LoginStackParamList = {
  [Routes.ONBOARDING]: undefined;
  [Routes.LOGIN]: undefined;
  [Routes.SIGNUP]: undefined;
  [Routes.OTP]: {
    phoneNumber: string;
  };
};

const Stack = createNativeStackNavigator<LoginStackParamList>();
const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={Routes.ONBOARDING}>
      <Stack.Screen name={Routes.ONBOARDING} component={Onboarding} />
      <Stack.Screen name={Routes.LOGIN} component={Login} />
      <Stack.Screen name={Routes.SIGNUP} component={SignUp} />
      <Stack.Screen name={Routes.OTP} component={OTP} />
    </Stack.Navigator>
  );
};

export default AuthStack;
