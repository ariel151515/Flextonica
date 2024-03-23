import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './navigation/AppNavigator';
import { PorveedorContextoUser } from './context/contextoUser';

const App = () => {
  return (
      <PorveedorContextoUser>
        <StatusBar style="auto" backgroundColor="#fff"/> 
        <AppNavigator PorveedorContextoUser={PorveedorContextoUser}/>
      </PorveedorContextoUser>
  );
}

export default App;
