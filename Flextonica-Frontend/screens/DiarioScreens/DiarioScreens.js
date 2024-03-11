import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; // Añade la importación de StyleSheet
import DatepickerComponent from '../../components/DatepickerComponent';
import Layout from '../../components/Layout';

const DiarioScreen = () => {
  return (
    <Layout>
        <DatepickerComponent />
    </Layout>
  );
}


export default DiarioScreen;
