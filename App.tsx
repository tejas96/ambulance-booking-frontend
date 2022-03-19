import 'react-native-gesture-handler';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {RecoilRoot} from 'recoil';
import {PaperTheme} from './src/config';
import AmbulanceApp from './src/navigation';
import {AuthProvider, UtilityProvider} from './src/providers';

const App = () => {
  return (
    <PaperProvider theme={PaperTheme}>
      <RecoilRoot>
        <AuthProvider>
          <UtilityProvider>
            <AmbulanceApp />
          </UtilityProvider>
        </AuthProvider>
      </RecoilRoot>
    </PaperProvider>
  );
};

export default App;
