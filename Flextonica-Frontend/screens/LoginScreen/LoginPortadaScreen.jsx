import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const LoginPortadaScreen = () => {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image  source={require('../../assets/logo.png')} style={styles.image} />
        </View>

        <View style={styles.btnG}>
               <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                 <Text style={styles.buttonTextR}>Iniciar sesión</Text>
               </TouchableOpacity>
        </View>

        <View style={styles.btnGG}>
              <TouchableOpacity onPress={() => navigation.navigate('Registrarse')}>
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
    textAlign: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center', // Alinea la imagen verticalmente
  },
  image: {
    alignSelf: 'center', // Centra la imagen horizontalmente
    marginTop: -300, // Ajusta el valor según sea necesario para colocar la imagen en la parte superior de la pantalla
  },
  buttonR: {
    backgroundColor: '#fff',
    paddingVertical: 13,
    paddingHorizontal: 13,
    borderRadius:5,
    alignItems: 'center',
    marginBottom: 10,
    width: '90%', // Ajustado a 90% del ancho de la pantalla
  },
  buttonI: {
    backgroundColor: '#0B5CFF',
    paddingVertical: 13,
    paddingHorizontal: 13,
    borderRadius:5,
    alignItems: 'center',
    marginBottom: 10,
    width: '90%', // Ajustado a 90% del ancho de la pantalla
  },
  buttonTextI: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16
  },
  buttonTextR: {
    color: '#0B5CFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  btnG: {
    width:'90%',
    borderRadius:5,
    alignItems:'center',
    backgroundColor:'#fff',
    paddingBottom:15,
    paddingTop:15,
    marginBottom:10,
  },
  btnGG: {
    width:'90%',
    borderRadius:5,
    alignItems:'center',
    backgroundColor:'#0B5CFF',
    paddingBottom:13,
    paddingTop:13,
    marginBottom:40,
  }
});

export default LoginPortadaScreen;
