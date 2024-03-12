import { View, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import React from 'react'


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
                </Text>
            </View>
        </View>
    )
}




const ContenedorAlimentos = ({titulo,calorias}) => {
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
       <Item />

       <View style={styles.btn}>
            <Entypo name="plus" size={24} color="#0B5CFF" />
            <Text style={styles.botonLetra}>AÑADIR ENTRADA</Text>
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
        backgroundColor: '#F2F3F3',
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        padding: 10,
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
        backgroundColor: '#fff'
    },
    icon:{
        marginBottom:0,
        display:'flex',
        marginLeft:10,
        color:'#787474'
    },
    tituloBlanco: {
        gap:0,
        display: 'flex',
        fontWeight:'bold'
    },
    tituloBlancoDos: {
        gap:0,
        display: 'flex',
        color: '#787474'
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
        alignItems: 'center',
        width: '100%',
        height: 60,
        paddingLeft:10,
        backgroundColor:'#fff',
        color:'#0B5CFF',
        gap:10,
    },
    botonLetra: {
        color:'#0B5CFF'
    }
  
});

export default ContenedorAlimentos