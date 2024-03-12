import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform  } from 'react-native'; // Añade la importación de StyleSheet
import DatepickerComponent from '../../components/DatepickerComponent';
import Layout from '../../components/Layout';
import BoxDiario from '../../components/BoxDiario';
import ContenedorAlimentos from '../../components/ContenedorAlimentos'

const DiarioScreen = () => {
  return (
    <Layout>
        <DatepickerComponent />
        <BoxDiario />
        
          <ScrollView style={styles.contenedor}>
            <ContenedorAlimentos titulo="Desayuno" calorias="678 Kcal"/>
            <ContenedorAlimentos titulo="Almuerzo" calorias="548 Kcal"/>
          </ScrollView>
    
    </Layout>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    width: '100%'
  },
})


export default DiarioScreen;
