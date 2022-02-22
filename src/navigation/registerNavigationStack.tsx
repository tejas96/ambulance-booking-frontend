import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UserDetailsInfoScreen, UserDetailsTypeScreen} from '../screens';
import {Routes} from '.';
import {UserRole} from '../model';

export type RegisterStackParamList = {
  [Routes.USER_DETAILS_INFO]: {
    role: UserRole;
  };
  [Routes.USER_DETAILS_TYPE]: undefined;
};

const Stack = createNativeStackNavigator<RegisterStackParamList>();
const RegisterNavigationStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={Routes.USER_DETAILS_TYPE}>
      <Stack.Screen
        name={Routes.USER_DETAILS_TYPE}
        component={UserDetailsTypeScreen}
      />
      <Stack.Screen
        name={Routes.USER_DETAILS_INFO}
        component={UserDetailsInfoScreen}
      />
    </Stack.Navigator>
  );
};

export default RegisterNavigationStack;
