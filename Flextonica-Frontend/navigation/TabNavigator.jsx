// AppNavigator.js
import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Ionicons, MaterialCommunityIcons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

// Screen
import DayScreen from '../screens/DayScreen/DayScreen';
import WeekScreen from '../screens/WeekScreen/WeekScreen';
import MenuScreen from '../screens/MenuScreen/MenuScreen';
import NutritionTabs from '../screens/NutritionTabs/NutritionTabs';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator 
          screenOptions={{
            tabBarActiveTintColor: '#6200EE',
            tabBarInactiveTintColor: '#A4A0A0',
            tabBarStyle: [{ 
                    display: 'flex', 
                    backgroundColor:'#fff',
                    height:'6%',
                    paddingTop:3,
                    paddingBottom:3
                },
                null
            ]
        }}
    >

    <Tab.Screen 
           name="Day" 
           component={DayScreen} 
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
           component={WeekScreen} 
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
           component={NutritionTabs} 
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
           component={MenuScreen} 
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