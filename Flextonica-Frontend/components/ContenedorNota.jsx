import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React from 'react'

const ContenedorNota = () => {
  return (
    <View style={styles.container}>
      <View style={styles.barraTop}>
        <Text style={styles.aguaTop}>Nota</Text>
        <View>
        <AntDesign name="edit" size={20} color="#B8A1A1" />
        </View>
      </View>
       
       <View style={styles.containerVasos}>
          <Text style={styles.texto}>
             Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar 
          </Text>
       </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#Fff',
      marginTop:0,
      marginBottom:10,
    },
    barraTop: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent:'space-between',
      width: '100%',
      height: '50',
      backgroundColor: '#F2F3F3',
      padding: 10,
      fontWeight:'bold'
    },
    aguaTop: {
      fontWeight:'bold',
    },
    containerVasos:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent:'space-between',
      gap:25,
      paddingLeft:9    ,
      paddingRight:9,
      paddingTop:10,
      paddingBottom:10,
      width: '100%'
    },
    texto:{
        color: '#5C5656',
    }
  })

export default ContenedorNota