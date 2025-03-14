import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import campaign from '../assets/campaign.png'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import Color from '../components/Color.js';

export const Item = () => {
    return (
        <View style={styles.item}>

            <View style={styles.it}>
               <View style={styles.itt}>
                    <Text style={styles.tituloBlanco}>Omelette de Atum</Text>
                    <Text style={styles.icon}>
                        <MaterialCommunityIcons name="chef-hat" size={14} color="#787474" />
                        Receta  
                    </Text>
               </View>
                <Text style={styles.tituloBlancoDos}>347g C:53g  G:3g  P:13g  Kcal 128</Text>
            </View>

            <View style={styles.campana}>
                <Text>

                 <MaterialIcons name="campaign" size={24} color="#CDCACA" />
                 {/* <Image source={require('../assets/campaign.png')} /> */}

                </Text>
            </View>
        </View>
    )
}




const ContenedorAlimentos = ({titulo,calorias}) => {
 const navigation = useNavigation();
  return (
    <View style={styles.container}>

       <View style={styles.BarraTop}>
         <View>
           <Text style={styles.titulo}>{titulo}</Text>
         </View>
         <View>
           <Text style={styles.titulo}>{calorias}</Text>
         </View>
       </View>

       <Item />
       <Item />
       <Item />
       <Item />
     
       <View style={styles.btn}>
            <TouchableOpacity onPress={() => navigation.navigate('Alimentos')}>
                <View style={styles.botonLetra}>
                     <View><Entypo name="plus" size={24} color="#6200EE" /></View>
                     <View><Text style={styles.textt} >AÑADIR ENTRADA</Text></View>
                </View>
            </TouchableOpacity>
       </View>

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      width: '100%',
      marginTop: 10,
    },
    BarraTop: {
        backgroundColor:Color.BarraTop,
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingLeft: 10,
        paddingRight:10,
        paddingTop:13,
        paddingBottom:13,
        backgroundColor:Color.barra_comidas_azul_claro,
        borderBottomWidth: 1,
        borderBottomColor:Color.linea,
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight:10,
        paddingTop:13,
        paddingBottom:13,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor:Color.linea,
    },
    icon:{
        marginBottom:0,
        display:'flex',
        marginLeft:10,
        color:'#787474',
        display: 'none',
    },
    tituloBlanco: {
        gap:0,
        display: 'flex',
    },
    tituloBlancoDos: {
        gap:0,
        display: 'flex',
        color: '#787474',
        fontSize:12,
    },
    itt: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    titulo: {
        fontWeight:'bold',
    },
    btn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        width: '100%',
        paddingTop:13,
        paddingBottom:13,
        paddingLeft:10,
        backgroundColor:'#fff',
        color:'#0B5CFF',
        gap:20,
        alignItems: 'center',
    },
    botonLetra: {
        color:'#0B5CFF',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center',
        width: '100%',
        gap:10
    },
    textt: {
        color:'#6200EE'
    }
  
});

export default ContenedorAlimentos