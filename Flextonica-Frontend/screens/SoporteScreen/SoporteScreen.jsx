import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';


const SoporteScreen = () => {

const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#0B5CFF',
      },
      headerTintColor: '#fff',
      headerLeft: () => (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={24} color="#fff" style={{marginLeft:10}} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);


  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const enviarMensaje = () => {
    // Aquí puedes implementar la lógica para enviar el mensaje, 
    // incluyendo el manejo del archivo adjunto si es necesario
    console.log('Asunto:', asunto);
    console.log('Mensaje:', mensaje);
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
