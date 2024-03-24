// AppNavigator.js
import React, {useContext, StyleSheet} from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Ionicons, MaterialCommunityIcons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

// contexto login
import { ContextoUser } from './../context/contextoUser'; // Import the context

// Screen
import DayScreen from '../screens/DayScreen/DayScreen';
import WeekScreen from '../screens/WeekScreen/WeekScreen';
import MenuScreen from '../screens/MenuScreen/MenuScreen';
import NutritionTabs from '../screens/NutritionTabs/NutritionTabs';
import LoginPortadaScreen from '../screens/LoginScreen/LoginPortadaScreen';
import TableroScreen from '../screens/TableroScreen/TableroScreen'

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
const {isAuthenticated} = useContext(ContextoUser); // Asegúrate de usar correctamente el contexto

  return (
    <Tab.Navigator 
        screenOptions={{
            tabBarActiveTintColor: '#000',
            tabBarInactiveTintColor: '#ccc',
            tabBarStyle: { 
            display: 'flex', 
            backgroundColor: '#fff',
            height: '8%',
            paddingTop: 9,
            paddingBottom: 9,
            borderTopLeftRadius:0,
            borderTopRightRadius:0,
            },
        }}
    >

<Tab.Screen 
    name="Tablero" 
    component={isAuthenticated ? TableroScreen : LoginPortadaScreen} 
    options={{
        tabBarIcon: ({ focused, color, size }) => (
            <Ionicons 
                name="today-outline" 
                size={size} 
                color={color}
            />
        ),
        tabBarLabel: ({ focused, color }) => (
            <Text style={{ fontSize: 12, marginBottom:0, color: color, marginTop:0 }}>
                Tablero
            </Text>
        ),
        headerShown: false,
        headerTitle: false
    }}
/>



    <Tab.Screen 
           name="Diario" 
           component={isAuthenticated ? DayScreen : LoginPortadaScreen} 
           options={{
            tabBarIcon: ({ focused, color, size }) => (
                <Ionicons 
                     name="today-outline" 
                     size={size} 
                     color={color}
                    />
                   ),
                   tabBarLabel: ({ focused, color }) => (
                    <Text style={{ fontSize: 12, marginBottom:0, color: color, marginTop:0}}>
                        Diario
                    </Text>
                ),
                }}
           />

      <Tab.Screen 
           name="Semanal" 
           component={isAuthenticated ? WeekScreen : LoginPortadaScreen} 
           options={{
            tabBarIcon: ({ focused, color, size }) => (
                <MaterialCommunityIcons 
                          name="calendar-week-begin" 
                          size={size} 
                          color={color} />
                      ),
                      tabBarLabel: ({ focused, color }) => (
                        <Text style={{ fontSize: 12, marginBottom:0, color: color, marginTop:0}}>
                            Semanal
                        </Text>
                    ),
             }}
                   
           />


      <Tab.Screen 
           name="Menu" 
           component={isAuthenticated ? MenuScreen : LoginPortadaScreen} 
           options={{
            tabBarIcon: ({ focused, color, size }) => (
                <Feather 
                    name="menu" 
                    size={size} 
                    color={color}/>
            ),
            tabBarLabel: ({ focused, color }) => (
                <Text style={{ fontSize: 12, marginBottom:0, color: color, marginTop:0}}>
                    Menu
                </Text>
            ),
        }}
           />

    </Tab.Navigator>
  );
}


export default TabNavigator;