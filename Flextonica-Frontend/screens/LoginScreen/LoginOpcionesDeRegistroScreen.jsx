import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image, Platform } from 'react-native';
import CustomHeader from '../../components/CustomHeader';

const LoginOpcionesDeRegistro = () => {

  const handlePress = () => {
    Alert.alert('Button Pressed!');
  };

  return (
    <View style={styles.container}>
      <CustomHeader color="#fff" texto="#000" colorIcono="#000" />
      <View style={styles.buttonContainer}>

        <Text style={{fontSize:24, textAlign:'center', paddingBottom:30}}>Elige cómo crear tu cuenta de Flextonica.</Text>

        <TouchableOpacity onPress={handlePress} style={[styles.buttonI, styles.shadow]}>
          <Text style={styles.buttonTextI}>Registrarse con email</Text>
        </TouchableOpacity>

        <Text style={{marginTop:10, marginBottom:25}}>O</Text>

        <TouchableOpacity onPress={handlePress} style={[styles.buttonR, styles.shadow]}>
          <View style={styles.btnG}>
            <Image source={require('../../assets/google-icono.png')} style={styles.image} />
            <Text style={styles.buttonTextR}>Continuar con Google</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePress} style={[styles.buttonR, styles.shadow]}>
          <View style={styles.btnG}>
            <Image source={require('../../assets/facebook-icono.png')} style={styles.image} />
            <Text style={styles.buttonTextR}>Continuar con Facebook</Text>
          </View>
        </TouchableOpacity>
        
        <Text style={{color:'#9D9B9B', fontSize:13, paddingBottom:30}}>Nunca publicaremos nada sin tu permiso.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 140, // Puedes ajustar este valor según tu diseño
    width: '90%',
    alignItems: 'center',
  },
  buttonR: {
    backgroundColor: '#fff',
    paddingVertical: 13,
    paddingHorizontal: 13,
    borderRadius: 50,
    width: '90%', // Cambiado a 100%
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonI: {
    backgroundColor: '#000',
    paddingVertical: 13,
    paddingHorizontal: 13,
    borderRadius: 50,
    width: '90%', // Cambiado a 100%
    alignItems: 'center',
    marginBottom: 20,
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
  shadow: Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    android: {
      elevation: 4,
    },
  }),
  btnG: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:20
  },
  image: {
    width: 24,
    height: 24,
    marginLeft: 10, // Ajusta el espacio entre el texto y la imagen según sea necesario
  },
});

export default LoginOpcionesDeRegistro;
