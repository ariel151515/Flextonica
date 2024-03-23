import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform  } from 'react-native'; // Añade la importación de StyleSheet
import DatepickerComponent from '../../components/DatepickerComponent';
import Layout from '../../components/Layout';
import Box from '../../components/Box';
import ContenedorAlimentos from '../../components/ContenedorAlimentos';
import ContenedorAgua from '../../components/ContenedorAgua';
import ContenedorNota from '../../components/ContenedorNota';

const DayScreen = () => {
  return (
    <Layout>
        <DatepickerComponent />
        <Box titulo="DAY" />
          <ScrollView style={styles.contenedor}>
            <ContenedorAlimentos titulo="Almuerzo" calorias="548 Kcal"/>
            <ContenedorAgua />
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


export default DayScreen;
