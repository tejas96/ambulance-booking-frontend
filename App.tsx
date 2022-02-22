import React from 'react';
import AmbulanceApp from './src/navigation';
import {AuthProvider} from './src/providers';
import {Provider as PaperProvider} from 'react-native-paper';
const App = () => {
  return (
    <PaperProvider>
      <AuthProvider>
        <AmbulanceApp />
      </AuthProvider>
    </PaperProvider>
  );
};

export default App;
