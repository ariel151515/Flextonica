// AppNavigator.js
import React, {useContext} from 'react';
import { Text } from 'react-native';
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
           name="Day" 
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
                    Day
                </Text>
            ),
            headerShown: false,
            headerTitle: false
        }}
           />

      <Tab.Screen 
           name="Week" 
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
                    Week
                </Text>
            )

        }}
           />

      <Tab.Screen 
           name="Nutrition" 
           component={isAuthenticated ? NutritionTabs : LoginPortadaScreen} 
           options={{
            tabBarIcon: ({ focused, color, size }) => (
                <FontAwesome5 
                     name="nutritionix" 
                     size={size} 
                     color={color}
                      />
            ),
            tabBarLabel: ({ focused, color }) => (
                <Text style={{ fontSize: 12, marginBottom:0, color: color, marginTop:0}}>
                    Nutrition
                </Text>
            )
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