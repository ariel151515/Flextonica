import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React,{ useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

//Iconos
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export const BtnCerrarSesion = () => {

    const styles = StyleSheet.create({
        button: {
            width:'92%',
            backgroundColor: '#FFF',
            borderWidth: 2,
            borderColor: '#0B5CFF',
            paddingVertical: 7,
            paddingHorizontal: 5,
            borderRadius: 5,
            borderRadius:50,
            marginTop:30,
            marginBottom:20,
            marginLeft:'3.5%'
        },
        textBtn: {
          color: '#0B5CFF',
          fontSize: 16,
          textAlign: 'center',
        },
      });


    const handlePress = () => {
      // Aquí puedes manejar la lógica para cerrar sesión
    };
  
    return (
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.button}>
          <Text style={styles.textBtn}>Cerrar Sesión</Text>
        </View>
      </TouchableOpacity>
    );
  };
  
  
export const BoxMenuUser = () => {
    return (
        <View style={styles.container}>
           <View style={styles.containerElementos}>
                  <View style={styles.bagroundIMG}>
                  <Image source={require('../../assets/user.jpg')}  style={styles.backgroundImage}/>
                  </View>
                <View>
                    <Text style={styles.textUno}>arielgentile89</Text>
                    <Text style={styles.text}>vipndcfitness@gmail.com</Text>
                </View>
           </View>
        </View>
    );
}


export const ItemMenu = ({texto,icono}) => {
  const navigation = useNavigation()

    return (
      <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
           <View style={styles.contenedorItemMenu}>
              <View>{icono}</View>
              <View><Text style={styles.te}>{texto}</Text></View>
            </View>
      </TouchableOpacity>
    );
}


const MenuScreen = () => {
    const navigation = useNavigation(); // Declaración de navigation

    useEffect(() => {
        console.log("Ejecutando useEffect de WeekScreen");
        navigation.setOptions({
            headerShown: false, // Oculta la barra superior
            headerTitle: false // Oculta el título
        });
    }, []);

  return (
    <>
        <TouchableOpacity onPress={() => navigation.navigate('Objetivos')}>
          <Text>Objetivos</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Objetivos')}>
          <Text>Objetivos</Text>
        </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        paddingLeft:10,
        paddingRight:0,
        paddingTop:25,
        paddingBottom:10,
        backgroundColor: '#6200EE',
        
        //borderBottomWidth: 1,
        //borderBottomColor: '#ccc'
    },
    containerElementos: {
        display: 'flex',
        flexDirection: 'row',
        gap:20,
        alignItems: 'center',
    },
    bagroundIMG: {
        width: 70,
        height: 70,
        borderRadius: 35, // La mitad del ancho o alto para hacerla circular
        overflow: 'hidden', // Para recortar la imagen que se desborde del contenedor circular
    },
    infoUSER:{
        display: 'flex',
    },
    textUno:{
        color: '#fff',
        fontSize:20,
        fontWeight: 'bold',
    },
    text:{
        color: '#fff',
        fontSize:16,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // Ajusta la imagen para que cubra todo el contenido
        position: 'absolute', // La imagen se superpondrá a otros elementos
        width: '100%',
        height: '100%',
    },
    contenedorItemMenu: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        paddingLeft:10,
        paddingRight:0,
        paddingTop:20,
        paddingBottom:20,
        backgroundColor: '#fff',
        gap:20,
        alignItems: 'center',
    },
    contenedorItems:{
        display: 'flex',
        padding:10,
        backgroundColor: '#fff',
    },
    te: {
        color: '#4D4E4F',
        fontSize:16
    },
})

export default MenuScreen