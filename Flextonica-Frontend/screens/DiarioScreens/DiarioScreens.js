import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; // Añade la importación de StyleSheet
import DatepickerComponent from '../../components/DatepickerComponent';
import Layout from '../../components/Layout';
import BoxDiario from '../../components/BoxDiario';

const DiarioScreen = () => {
  return (
    <Layout>
        <DatepickerComponent />
        <BoxDiario />
    </Layout>
  );
}


export default DiarioScreen;
