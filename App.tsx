import React from 'react';
import AmbulanceApp from './src/navigation';
import {AuthProvider} from './src/providers';
import {Provider as PaperProvider} from 'react-native-paper';
import {PaperTheme} from './src/config';
import {RecoilRoot} from 'recoil';
const App = () => {
  return (
    <PaperProvider theme={PaperTheme}>
      <RecoilRoot>
        <AuthProvider>
          <AmbulanceApp />
        </AuthProvider>
      </RecoilRoot>
    </PaperProvider>
  );
};

export default App;
