import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ContextoUser } from '../context/contextoUser'; // Importa el contexto

// Importa las pantallas
import DayScreen from './../screens/DayScreen/DayScreen';
import WeekScreen from './../screens/WeekScreen/WeekScreen';
import MenuScreen from './../screens/MenuScreen/MenuScreen';
import NutritionTabs from './../screens/NutritionTabs/NutritionTabs';
import AddAlimento from '../screens/AddAlimento/AddAlimento';
import AddComidas from '../screens/AddComidas/AddComidas';
import CrearAlimento from '../screens/CrearAlimento/CrearAlimento';
import AjustesScreen from '../screens/AjustesScreen/AjustesScreen';
import PrivacidadScreen from '../screens/PrivacidadScreen/PrivacidadScreen';
import SoporteScreen from '../screens/SoporteScreen/SoporteScreen';
import MisAlimentosScreen from '../screens/MisAlimentosScreen/MisAlimentosScreen';
import NotaScreen from '../screens/NotasScreen/NotaScreen';
import EvolutionScreen from '../screens/EvolutionScreen/EvolutionScreen';
import AddSeguimiento from '../screens/EvolutionScreen/AddSeguimiento';
import ObjetivosScreen from '../screens/ObjetivosScreen/ObjetivosScreen';
import PerfilUserScreen from '../screens/PerfilUserScreen/PerfilUserScreen';
import RecordatoriosScreen from '../screens/RecordatoriosScreen/RecordatoriosScreen';
import CentroDePrivacidadScreen from '../screens/PrivacidadScreen/PrivacidadScreen'

// Pantallas de inicio de sesión
import LoginPortadaScreen from '../screens/LoginScreen/LoginPortadaScreen';
import LoginOpcionesDeRegistroScreen from '../screens/LoginScreen/LoginOpcionesDeRegistroScreen';
import LoginFormularioScreen from '../screens/LoginScreen/LoginFormularioScreen';
import RegistroConEmailScreen from '../screens/RegistroConEmailScreen/RegistroConEmailScreen';

import TabNavigator from './TabNavigator';
const Stack = createStackNavigator();

const AppNavigator = () => {
  // Usa useContext para acceder al contexto
  const { isAuthenticated } = useContext(ContextoUser); // Asegúrate de usar correctamente el contexto

  return (
    <NavigationContainer>
      {/* Envuelve AppNavigator con el proveedor de contexto PorveedorContextoUser */}
      <Stack.Navigator initialRouteName={isAuthenticated ? 'Tabs' : 'Login portada'}>
        <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Nutrition" component={isAuthenticated ? NutritionTabs : LoginPortadaScreen} />
        <Stack.Screen name="Perfil" component={isAuthenticated ? PerfilUserScreen : LoginPortadaScreen} />
        <Stack.Screen name="Objetivos" component={isAuthenticated ? ObjetivosScreen : LoginPortadaScreen} />
        <Stack.Screen name="Alimentos" component={isAuthenticated ? MisAlimentosScreen : LoginPortadaScreen} />
        <Stack.Screen name="Seguimiento" component={isAuthenticated ? EvolutionScreen : LoginPortadaScreen} />
        <Stack.Screen name="Recordatorios" component={isAuthenticated ? RecordatoriosScreen : LoginPortadaScreen} />
        <Stack.Screen name="Ajustes" component={isAuthenticated ? AjustesScreen : LoginPortadaScreen} />
        <Stack.Screen name="Soporte" component={isAuthenticated ? SoporteScreen : LoginPortadaScreen} />
        <Stack.Screen name="Privacidad" component={isAuthenticated ? CentroDePrivacidadScreen : LoginPortadaScreen} />
        <Stack.Screen name="AddAlimento" component={isAuthenticated ? AddAlimento : LoginPortadaScreen} />
        <Stack.Screen name="AddSeguimiento" component={isAuthenticated ? AddSeguimiento : LoginPortadaScreen} />

        <Stack.Screen name="Login portada" component={LoginPortadaScreen} options={{ headerShown: false }} />
       
        <Stack.Screen name="Registro" component={RegistroConEmailScreen} options={{ headerShown: true }} />
        <Stack.Screen name="Login" component={LoginFormularioScreen} options={{ headerShown: true }} />
        <Stack.Screen name="Registrarse" component={LoginOpcionesDeRegistroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
