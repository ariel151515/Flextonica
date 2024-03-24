import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Platform, TouchableOpacity  } from 'react-native'; // Añade la importación de StyleSheet
import DatepickerComponent from '../../components/DatepickerComponent';
import Layout from '../../components/Layout';
import Box from '../../components/Box';
import ContenedorAlimentos from '../../components/ContenedorAlimentos';
import ContenedorAgua from '../../components/ContenedorAgua';
import ContenedorNota from '../../components/ContenedorNota';
import { useNavigation } from '@react-navigation/native';
import ContenedorMacrosSemanal from '../../components/ContenedorMacrosSemanal';
import { MaterialIcons } from '@expo/vector-icons'; // Asegúrate de importar MaterialIcons de acuerdo a tu configuración


const WeekScreen = () => {
  const navigation = useNavigation(); // Mueve la declaración de useNavigation aquí

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#fff',
      headerLeftContainerStyle: {
        paddingLeft: 10, // Ajusta según sea necesario
      },
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
    <Layout>
        <DatepickerComponent />
        <Box titulo="Semanal" />
        
          <ScrollView style={styles.contenedor}>
            <ContenedorMacrosSemanal />
            <ContenedorNota />
          </ScrollView>
    
    </Layout>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    width: '100%'
  },
})


export default WeekScreen;
