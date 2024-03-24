import React from 'react';
import { View,  StyleSheet, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DatepickerComponent from '../../components/DatepickerComponent';
import MacrosScreen from '../NutritionTabs/MacrosScreen';
import NutrientesScreen from '../NutritionTabs/NutrientesScreen';
import FlexibleScreen from '../NutritionTabs/FlexibleScreen';
import CustomHeader from '../../components/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import { Feather, Ionicons, MaterialCommunityIcons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

const NutritionTabs = () => {

  const navigation = useNavigation(); // Mueve la declaración de useNavigation aquí

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#fff',
      headerLeft: () => (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()} // Utilizamos navigation.goBack() para regresar a la pantalla anterior
        >
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      <CustomHeader />
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
            backgroundColor: '#BDF51C', // Color del indicador de pestaña activa
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
