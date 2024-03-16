import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Asegúrate de importar MaterialIcons desde el paquete adecuado

const SearchAlimentos = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <MaterialIcons name="search" size={24} color="#000" />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Search Alimentos"
        placeholderTextColor="#888"
      />
      <TouchableOpacity style={styles.buttonB}>
        <MaterialIcons name="qr-code-scanner" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'#F3F2F2',
  },
  input: {
    flex: 1,
    backgroundColor: '#F3F2F2',
    borderColor: '#ccc',
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontSize: 16,
    marginRight: 10, // Nuevo margen para evitar separación con los botones
  },
  button: {
    backgroundColor: '#F3F2F2',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  buttonB: {
    backgroundColor: '#ffff',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});

export default SearchAlimentos;
