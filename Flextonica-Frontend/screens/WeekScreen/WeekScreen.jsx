import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Platform  } from 'react-native'; // Añade la importación de StyleSheet
import DatepickerComponent from '../../components/DatepickerComponent';
import Layout from '../../components/Layout';
import Box from '../../components/Box';
import ContenedorAlimentos from '../../components/ContenedorAlimentos';
import ContenedorAgua from '../../components/ContenedorAgua';
import ContenedorNota from '../../components/ContenedorNota';
import { useNavigation } from '@react-navigation/native';
import ContenedorMacrosSemanal from '../../components/ContenedorMacrosSemanal';

const WeekScreen = () => {
  const navigation = useNavigation(); // Declaración de navigation

  useEffect(() => {
    console.log("Ejecutando useEffect de WeekScreen");
    navigation.setOptions({
        headerShown: false, // Oculta la barra superior
        headerTitle: false // Oculta el título
    });
}, []);


  return (
    <Layout>
        <DatepickerComponent />
        <Box titulo="WEEK" />
        
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
