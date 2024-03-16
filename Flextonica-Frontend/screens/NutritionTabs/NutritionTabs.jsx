import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DatepickerComponent from '../../components/DatepickerComponent';
import MacrosScreen from '../NutritionTabs/MacrosScreen';
import NutrientesScreen from '../NutritionTabs/NutrientesScreen';
import FlexibleScreen from '../NutritionTabs/FlexibleScreen';

const Tab = createMaterialTopTabNavigator();

const NutritionTabs = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#6200EE',
      },
      headerTintColor: '#fff',
      headerLeft: () => (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      <DatepickerComponent />
      <Tab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: '#fff', // Color de fondo de las pestañas
            borderTopWidth: 1, // Grosor del borde superior
            borderTopColor: '#D9D9D9', // Color del borde superior
          },
          labelStyle: {
            fontWeight: 'bold', // Fuente en negrita
          },
          activeTintColor: '#000', // Color del texto de la pestaña activa
          inactiveTintColor: '#ccc', // Color del texto de la pestaña inactiva
          indicatorStyle: {
            backgroundColor: '#6200EE', // Color del indicador de pestaña activa
          },
        }}
      >
        <Tab.Screen name="MACROS" component={MacrosScreen} />
        <Tab.Screen name="NUTRIENTES" component={NutrientesScreen} />
        <Tab.Screen name="FLEXIBLE" component={FlexibleScreen} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 15,
  },
});

export default NutritionTabs;
