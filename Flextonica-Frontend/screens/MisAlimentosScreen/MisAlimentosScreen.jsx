import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


// Screen
//import MisAlimentosTabs from './MisAlimentosTabs/MisAlimentosTabs';
import FlextonicaScreen from './MisAlimentosScreen/FlextonicaScreen';
import CaloriekingScreen from './MisAlimentosScreen/CaloriekingScreen';
import MAlimentosScreen from './MisAlimentosScreen/MAlimentosScreen';


const Tab = createMaterialTopTabNavigator();

const Alimentos = () => {

    const navigation = useNavigation();

    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerStyle: {
          backgroundColor: '#0B5CFF',
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
        
         {/*Son todos los alimentos que los usuarios an usado alguna vez (Los alimentos confirmados 
            son los que probienen de la base de datos - tienen un tilde)*/}
         <Tab.Screen name="Calorieking" component={CaloriekingScreen} />

         {/*Son los alimentos que probienen de la base de datos*/}
         <Tab.Screen name="Flextonica" component={FlextonicaScreen} />

         {/*Son mis alimentos creados y usados */}
         <Tab.Screen name="Mis alimentos" component={MAlimentosScreen} />

         
      </Tab.Navigator>
    </View>
  )
}

const styles = StyleSheet.create({
    backButton: {
      marginLeft: 15,
    },
  });
  
export default Alimentos;
