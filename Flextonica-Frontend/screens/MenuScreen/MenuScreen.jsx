import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import React,{ useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

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
    return (
        <View style={styles.contenedorItemMenu}>
            <View>{icono}</View>
            <View><Text style={styles.te}>{texto}</Text></View>
        </View>
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
    <ScrollView style={{ flex: 1 }}>
        <View>
        <View style={styles.container}>
          <BoxMenuUser />
        </View>

        <View style={styles.contenedorItems}>
          <ItemMenu texto="Reactivar Premium" icono={<MaterialIcons name="workspace-premium" size={24} color="#F6DB4E" />} />
          <ItemMenu texto="Perfil" icono={<MaterialCommunityIcons name="face-man-profile" size={24} color="#4D4E4F" />} />
          <ItemMenu texto="Diario" icono={<FontAwesome6 name="calendar-day" size={24} color="#4D4E4F" />} />
          <ItemMenu texto="Semanal" icono={<FontAwesome5 name="calendar-week" size={24} color="#4D4E4F" />} />
          <ItemMenu texto="Objetivos" icono={<Entypo name="hair-cross" size={24} color="#4D4E4F" />} />
          <ItemMenu texto="Nutricion" icono={<MaterialCommunityIcons name="nutrition" size={24} color="#4D4E4F" />} />
          <ItemMenu texto="Alimentos" icono={<MaterialCommunityIcons name="food-takeout-box" size={24} color="#4D4E4F" />} />
          <ItemMenu texto="Recetas" icono={<MaterialCommunityIcons name="chef-hat" size={24} color="#4D4E4F" />} />
          <ItemMenu texto="Seguimiento" icono={<MaterialIcons name="analytics" size={24} color="#4D4E4F" />} />
          <ItemMenu texto="Recordatorios" icono={<Ionicons name="notifications" size={24} color="#4D4E4F" />} />
          <ItemMenu texto="Ajustes" icono={<Ionicons name="settings" size={24} color="#4D4E4F" />} />
          <ItemMenu texto="Soporte" icono={<FontAwesome name="support" size={24} color="#4D4E4F" />} />
          <ItemMenu texto="Centro de privacidad" icono={<MaterialIcons name="security" size={24} color="#4D4E4F" />} />
         
          <BtnCerrarSesion />
       
        </View>
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
        paddingTop:25,
        paddingBottom:10,
        backgroundColor: '#0B5CFF',
        
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