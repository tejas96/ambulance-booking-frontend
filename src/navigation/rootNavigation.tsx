import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './authStack';
import AppStack from './appStack';
import {useSession} from '../hooks';
import {Loader} from '../components';

function RootNavigation() {
  const session = useSession();
  let {loading, user} = session;
  return (
    <>
      {loading ? (
        <Loader isLoading={true}>null</Loader>
      ) : (
        <NavigationContainer>
          {user ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
      )}
    </>
  );
}

export default RootNavigation;
