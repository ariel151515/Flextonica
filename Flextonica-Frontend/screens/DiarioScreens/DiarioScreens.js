import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; // Añade la importación de StyleSheet
import DatepickerComponent from '../../components/DatepickerComponent';

const DiarioScreen = () => {
  return (
    <View style={styles.container}>
        <DatepickerComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:'9%', // Esto hará que el contenedor tome el 100% del ancho disponible
  },
});

export default DiarioScreen;
