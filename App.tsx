import 'react-native-gesture-handler';
import React from 'react';
import AmbulanceApp from './src/navigation';
import {AuthProvider, SocketProvider} from './src/providers';
import {Provider as PaperProvider} from 'react-native-paper';
import {RecoilRoot} from 'recoil';
import {PaperTheme} from './src/config';

const App = () => {
  return (
    <PaperProvider theme={PaperTheme}>
      <RecoilRoot>
        <AuthProvider>
          <SocketProvider>
            <AmbulanceApp />
          </SocketProvider>
        </AuthProvider>
      </RecoilRoot>
    </PaperProvider>
  );
};

export default App;
