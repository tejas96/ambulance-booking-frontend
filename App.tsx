import React from 'react';
import AmbulanceApp from './src/navigation';
import {AuthProvider} from './src/providers';
import {Provider as PaperProvider} from 'react-native-paper';
import {PaperTheme} from './src/config';
const App = () => {
  return (
    <PaperProvider theme={PaperTheme}>
      <AuthProvider>
        <AmbulanceApp />
      </AuthProvider>
    </PaperProvider>
  );
};

export default App;
