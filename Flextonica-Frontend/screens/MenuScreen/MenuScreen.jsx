import React,{ useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ContextoUser } from '../../context/contextoUser';

// Firebase
import app from '../../firebase/firebase-config';
import { getAuth } from 'firebase/auth';
const auth = getAuth(app);

//Iconos
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export const BtnCerrarSesion = () => {
  const navigation = useNavigation(); // Declaración de navigation
  
  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigation.navigate('Login portada'); // Redirige al usuario a la página de inicio de sesión

    } catch (error) {
      console.log('Error al cerrar sesión:', error.message);
    }
  };
  
    const styles = StyleSheet.create({
        button: {
            width:'92%',
            backgroundColor: '#FFF',
            borderWidth: 2,
            borderColor: '#000',
            paddingVertical: 7,
            paddingHorizontal: 5,
            borderRadius: 5,
            borderRadius:50,
            marginTop:30,
            marginBottom:20,
            marginLeft:'3.5%'
        },
        textBtn: {
          color: '#000',
          fontSize: 16,
          textAlign: 'center',
        },
      });

    return (
      <TouchableOpacity onPress={() => handleLogout()}>
        <View style={styles.button}>
          <Text style={styles.textBtn}>Cerrar Sesión</Text>
        </View>
      </TouchableOpacity>
    );
  };
  
  
export const BoxMenuUser = () => {
const { getUserData } = useContext(ContextoUser);
const userData = getUserData();

    return (
        <View style={styles.container}>
           <View style={styles.containerElementos}>
                  <View style={styles.bagroundIMG}>
                  <Image source={require('../../assets/user.jpg')}  style={styles.backgroundImage}/>
                  </View>
                <View>
                    <Text style={styles.textUno}>{userData.displayName}</Text>
                    <Text style={styles.text}>{userData.email}</Text>
                </View>
           </View>
        </View>
    );
}



const MenuScreen = () => {
    const navigation = useNavigation(); // Declaración de navigation
    
    useEffect(() => {
      navigation.setOptions({
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
        headerShown: false,
      });

  }, []);

  
  const handleLogout = () => {
    auth.signOut()
    .then(() => {
        console.log('Sesión cerrada exitosamente');
    })
    .catch(error => {
        console.log('Error al cerrar sesión:', error.message);
    });
};

  return (
    <ScrollView>
      <BoxMenuUser />
      <View style={styles.contenedorItems}>

              <View style={styles.contenedorItem}>
                <TouchableOpacity onPress={() => navigation.navigate('Objetivos')}>
                  <View style={{display:'flex', flexDirection:'row', gap:20, alignItems:'center'}}>
                    <MaterialIcons name="workspace-premium" size={24} color="#F6DB4E" />
                    <Text>Reactivar Premium</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.contenedorItem}>
                <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
                  <View style={{display:'flex', flexDirection:'row', gap:20, alignItems:'center'}}>
                      <MaterialCommunityIcons name="face-man-profile" size={24} color="#4D4E4F" />
                      <Text>Perfil</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.contenedorItem}>
                <TouchableOpacity onPress={() => navigation.navigate('Diario')}>
                  <View style={{display:'flex', flexDirection:'row', gap:20, alignItems:'center'}}>
                      <FontAwesome6 name="calendar-day" size={24} color="#4D4E4F" />
                      <Text>Diario</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.contenedorItem}>
                <TouchableOpacity onPress={() => navigation.navigate('Semanal')}>
                  <View style={{display:'flex', flexDirection:'row', gap:20, alignItems:'center'}}>
                      <FontAwesome5 name="calendar-week" size={24} color="#4D4E4F" />
                      <Text>Semanal</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.contenedorItem}>
                <TouchableOpacity onPress={() => navigation.navigate('Objetivos')}>
                  <View style={{display:'flex', flexDirection:'row', gap:20, alignItems:'center'}}>
                      <Entypo name="hair-cross" size={24} color="#4D4E4F" />
                      <Text>Objetivos</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.contenedorItem}>
                <TouchableOpacity onPress={() => navigation.navigate('Nutrition')}>
                  <View style={{display:'flex', flexDirection:'row', gap:20, alignItems:'center'}}>
                      <MaterialCommunityIcons name="nutrition" size={24} color="#4D4E4F" />
                      <Text>Nutricion</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.contenedorItem}>
                <TouchableOpacity onPress={() => navigation.navigate('Alimentos')}>
                  <View style={{display:'flex', flexDirection:'row', gap:20, alignItems:'center'}}>
                      <MaterialCommunityIcons name="food-takeout-box" size={24} color="#4D4E4F" />
                      <Text>Alimentos</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.contenedorItem}>
                <TouchableOpacity onPress={() => navigation.navigate('Seguimiento')}>
                  <View style={{display:'flex', flexDirection:'row', gap:20, alignItems:'center'}}>
                      <MaterialIcons name="analytics" size={24} color="#4D4E4F" />
                      <Text>Seguimientos</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.contenedorItem}>
                <TouchableOpacity onPress={() => navigation.navigate('Recordatorios')}>
                  <View style={{display:'flex', flexDirection:'row', gap:20, alignItems:'center'}}>
                      <Ionicons name="notifications" size={24} color="#4D4E4F" />
                      <Text>Recordatorios</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.contenedorItem}>
                <TouchableOpacity onPress={() => navigation.navigate('Ajustes')}>
                  <View style={{display:'flex', flexDirection:'row', gap:20, alignItems:'center'}}>
                      <Ionicons name="settings" size={24} color="#4D4E4F" />
                      <Text>Ajustes</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.contenedorItem}>
                <TouchableOpacity onPress={() => navigation.navigate('Soporte')}>
                  <View style={{display:'flex', flexDirection:'row', gap:20, alignItems:'center'}}>
                      <FontAwesome name="support" size={24} color="#4D4E4F" />
                      <Text>Soporte</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.contenedorItem}>
                <TouchableOpacity onPress={() => navigation.navigate('Privacidad')}>
                  <View style={{display:'flex', flexDirection:'row', gap:20, alignItems:'center'}}>
                      <MaterialIcons name="security" size={24} color="#4D4E4F" />
                      <Text>Centro de privacidad</Text>
                      </View>
                </TouchableOpacity>
              </View>

              <BtnCerrarSesion />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        paddingLeft:10,
        paddingRight:0,
        paddingTop:27,
        paddingBottom:15,
        marginTop:20,
        backgroundColor: '#000',
        
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
    contenedorItem: {
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
        flex: 1,
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