import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {AppStackParamList} from './AppStackParamsList';
import {Setting, AmbulanceBooking} from '../screens';
import Feather from 'react-native-vector-icons/Feather';
import {Text} from 'react-native-paper';
import {Routes} from '.';

const Tab = createBottomTabNavigator<AppStackParamList>();

const TabScreen: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          elevation: 0,
          backgroundColor: '#fff',
          borderRadius: 15,
          height: 50,
        },
      }}
      initialRouteName={Routes.AMBULANCE_BOOKING}>
      <Tab.Screen
        name={Routes.AMBULANCE_BOOKING}
        component={AmbulanceBooking}
        options={{
          tabBarIcon: ({color, size}) => (
            <>
              <Feather name="home" color={color} size={size} />
              <Text>Book</Text>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{
          tabBarIcon: ({color, size}) => (
            <>
              <Feather name="settings" color={color} size={size} />
              <Text>Settings</Text>
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabScreen;
