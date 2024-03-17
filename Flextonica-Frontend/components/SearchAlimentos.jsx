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
    backgroundColor:'#F9F6F6',
    borderWidth: 0, // Set border width to 0 to remove the border
    marginBottom:4,
    marginTop:7
  },
  input: {
    flex: 1,
    backgroundColor: '#F9F6F6',
    borderColor: '#ccc',
    paddingHorizontal: 0,
    paddingVertical: 10,
    fontSize: 16,
    marginRight: 10, // Nuevo margen para evitar separación con los botones
  },
  button: {
    backgroundColor: '#F9F6F6',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  buttonB: {
    backgroundColor: '#ffff',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderWidth: 0, // Set border width to 0 to remove the border
  },
});

export default SearchAlimentos;
