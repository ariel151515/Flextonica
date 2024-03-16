import React from 'react';
import { View, Text } from 'react-native'; // Asegúrate de importar Text de react-native
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import DayScreen from '../screens/DayScreen/DayScreen';
import WeekScreen from '../screens/WeekScreen/WeekScreen';
import MenuScreen from '../screens/MenuScreen/MenuScreen';
import NutritionTabs from '../screens/NutritionTabs/NutritionTabs';
//import PerfilUserScreen from '../screens/PerfilUserScreen/PerfilUserScreen';
//import ObjetivosScreen from '../screens/ObjetivosScreen/ObjetivosScreen';
//import RecordatoriosScreen from '../screens/RecordatoriosScreen/RecordatoriosScreen';
import MisAlimentosScreen from '../screens/MisAlimentosScreen/MisAlimentosScreen';

// Iconos tab
import { Feather } from '@expo/vector-icons'; // menú
import { Ionicons } from '@expo/vector-icons'; // día
import { MaterialCommunityIcons } from '@expo/vector-icons'; // semana
import { FontAwesome5 } from '@expo/vector-icons'; // nutrición


const Tab = createBottomTabNavigator();

const TabGroup = () => {
    return (
        <Tab.Navigator  
            screenOptions={{
                tabBarActiveTintColor: '#6200EE',
                tabBarInactiveTintColor: '#A4A0A0',
                tabBarStyle: [{ 
                        display: 'flex', 
                        backgroundColor:'#fff',
                        height:'7%'
                     },
                    null
                ]
            }}>
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
                        <Text style={{ fontSize: 12, marginBottom:5, color: color, marginTop:-5}}>
                            Day
                        </Text>
                    ),
                    // headerTitleStyle:{color:"#ccc"}
                    headerShown: false, // Oculta la barra superior en la pantalla "Diario"
                    headerTitle: false // Oculta el título en la pantalla "Diario"
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
                        <Text style={{ fontSize: 12, marginBottom:5, color: color, marginTop:-5}}>
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
                        <Text style={{ fontSize: 12, marginBottom:5, color: color, marginTop:-5}}>
                            Nutrition
                        </Text>
                    )
                }}
            />

            
            <Tab.Screen 
                name="MenuScreen" 
                component={MenuScreen} 
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Feather 
                            name="menu" 
                            size={size} 
                            color={color}/>
                    ),
                    tabBarLabel: ({ focused, color }) => (
                        <Text style={{ fontSize: 12, marginBottom:5, color: color, marginTop:-5}}>
                            Menu
                        </Text>
                    ),
                  
                }}
            />


         <Tab.Screen 
                name="Mis alimentos" 
                component={MisAlimentosScreen} 
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Feather 
                            name="menu" 
                            size={size} 
                            color={color}/>
                    ),
                    tabBarLabel: ({ focused, color }) => (
                        <Text style={{ fontSize: 12, marginBottom:5, color: color, marginTop:-5}}>
                            Mis Alimentos
                        </Text>
                    ),
                  
                }}
              />


        </Tab.Navigator>
    );
};

const Navigation = () => {
    return (
        <NavigationContainer>
            <View style={{ flex: 1 }}>
                <TabGroup />
            </View>
        </NavigationContainer>
    );
};

export default Navigation;
