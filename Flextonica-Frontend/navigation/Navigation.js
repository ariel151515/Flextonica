import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import DiarioScreen from '../screens/DiarioScreens/DiarioScreen';
import SemanalScreen from '../screens/SemanalScreens/SemanalScreen';
import MenuScreen from '../screens/MenuScreens/MenuScreens';
import NutricionScreen from '../screens/NutricionScreens/NutricionScreens';

import React from 'react';

const Tab = createBottomTabNavigator(); // Cambiado a Tab en mayúscula para convención de nombres

const TabGroup = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Diario" component={DiarioScreen} />
            <Tab.Screen name="Semanal" component={SemanalScreen} />
            <Tab.Screen name="Nutricion" component={NutricionScreen} />
            <Tab.Screen name="MenuScreen" component={MenuScreen} />
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


