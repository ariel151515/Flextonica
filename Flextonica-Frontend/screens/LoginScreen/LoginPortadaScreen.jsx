import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import CustomHeader from '../../components/CustomHeader';

const LoginPortadaScreen = () => {
  const handlePress = () => {
    Alert.alert('Button Pressed!');
  };

  return (
    <View style={styles.container}>
      <CustomHeader />
      <Image
        source={require('../../assets/logo.png')} // Aquí debes proporcionar la ruta de tu imagen
        style={styles.image}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handlePress} style={styles.buttonR}>
          <Text style={styles.buttonTextR}>Registrarme</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress} style={styles.buttonI}>
          <Text style={styles.buttonTextI}>Registrarme</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B5CFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20, // Puedes ajustar este valor según tu diseño
    width: '100%',
    alignItems: 'center',
  },
  buttonR: {
    backgroundColor: '#fff',
    paddingVertical: 13,
    paddingHorizontal: 13,
    borderRadius: 50,
    width: '90%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonI: {
    backgroundColor: '#0B5CFF',
    paddingVertical: 13,
    paddingHorizontal: 13,
    borderRadius: 50,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonTextI: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonTextR: {
    color: '#0B5CFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    marginTop:-400, // Ajusta el valor según sea necesario para colocar la imagen en la parte superior de la pantalla
  },
});

export default LoginPortadaScreen;
