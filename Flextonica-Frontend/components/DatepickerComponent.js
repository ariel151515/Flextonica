import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function DatepickerComponent() {
  return (
    <View style={styles.container}>
      <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
      <Text style={styles.text}>Hoy</Text>
      <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexGrow: 1, // Esto hará que el contenedor tome el 100% del ancho disponible
  },
  text: {
    flex: 1,
    textAlign: 'center'
  },
});

export default DatepickerComponent;
