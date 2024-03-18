import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Ionicons, MaterialCommunityIcons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import DayScreen from '../screens/DayScreen/DayScreen';
import WeekScreen from '../screens/WeekScreen/WeekScreen';
import MenuScreen from '../screens/MenuScreen/MenuScreen';
import NutritionTabs from '../screens/NutritionTabs/NutritionTabs';
import AddAlimento from '../screens/AddAlimento/AddAlimento';
import AddComidas from '../screens/AddComidas/AddComidas';
import CrearAlimento from '../screens/CrearAlimento/CrearAlimento';
import AjustesScreen from '../screens/AjustesScreen/AjustesScreen';
import PrivacidadScreen from '../screens/PrivacidadScreen/PrivacidadScreen';
import SoporteScreen from '../screens/SoporteScreen/SoporteScreen';
import MisAlimentosScreen from '../screens/MisAlimentosScreen/MisAlimentosScreen';
import NotaScreen from '../screens/NotasScreen/NotaScreen';
import EvolutionScreen from '../screens/EvolutionScreen/EvolutionScreen';

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
                        <Text style={{ fontSize: 12, marginBottom:5, color: color, marginTop:-5}}>
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
                name="Crear alimento" 
                component={CrearAlimento} 
                options={({ navigation }) => ({
                    tabBarIcon: ({ focused, color, size }) => (
                        <Feather 
                            name="menu" 
                            size={size} 
                            color={color}
                        />
                    ),
                    tabBarLabel: ({ focused, color }) => (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 12, marginBottom:5, color: color, marginTop:-5}}>
                            Crear Alimento
                            </Text>
                        </View>
                    )
                })}
            />

        <Tab.Screen 
                name="Progreso" 
                component={EvolutionScreen} 
                options={({ navigation }) => ({
                    tabBarIcon: ({ focused, color, size }) => (
                        <Feather 
                            name="menu" 
                            size={size} 
                            color={color}
                        />
                    ),
                    tabBarLabel: ({ focused, color }) => (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 12, marginBottom:5, color: color, marginTop:-5}}>
                              Evolution
                            </Text>
                        </View>
                    )
                })}
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
