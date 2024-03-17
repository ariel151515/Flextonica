import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const SoporteScreen = () => {
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [adjunto, setAdjunto] = useState('');

  const enviarMensaje = () => {
    // Aquí puedes implementar la lógica para enviar el mensaje, 
    // incluyendo el manejo del archivo adjunto si es necesario
    console.log('Asunto:', asunto);
    console.log('Mensaje:', mensaje);
    console.log('Archivo adjunto:', adjunto);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Asunto:</Text>
      <TextInput
        style={styles.input}
        value={asunto}
        onChangeText={setAsunto}
        placeholder="Ingrese el asunto"
      />

      <Text style={styles.label}>Mensaje:</Text>
      <TextInput
        style={[styles.input, styles.multilineInput]}
        value={mensaje}
        onChangeText={setMensaje}
        placeholder="Ingrese el mensaje"
        multiline
        numberOfLines={4}
      />

      <Text style={styles.label}>Adjuntar archivo:</Text>
      <TextInput
        style={styles.input}
        value={adjunto}
        onChangeText={setAdjunto}
        placeholder="Seleccione el archivo adjunto"
      />

      <TouchableOpacity style={styles.button} onPress={enviarMensaje}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  multilineInput: {
    height: 100,
  },
  button: {
    backgroundColor: '#0B5CFF',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SoporteScreen;
