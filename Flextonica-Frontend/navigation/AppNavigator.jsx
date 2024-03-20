// AppNavigator.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// Screen
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


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Day" component={DayScreen} />
      <Tab.Screen name="Week" component={WeekScreen} />
      <Tab.Screen name="Nutrition" component={NutritionTabs} />
      <Tab.Screen name="Menu" component={MenuScreen} />
    </Tab.Navigator>
  );
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Objetivos" component={ObjetivosScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
