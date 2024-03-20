import React from 'react';
import { StatusBar } from 'expo-status-bar'; // Importa el StatusBar
import AppNavigator from './navigation/AppNavigator';

const App = () => {
  return (
    <>
      <StatusBar style="auto" /> 
      <AppNavigator />
    </>
  );
}

export default App;
