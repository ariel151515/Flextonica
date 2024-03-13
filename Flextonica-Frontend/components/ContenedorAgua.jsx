import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React from 'react'

const ContenedorAgua = () => {
  return (
    <View style={styles.container}>
      <View style={styles.barraTop}>
        <Text style={styles.aguaTop}>Agua</Text>
        <View>
        <AntDesign name="edit" size={20} color="#B8A1A1" />
        </View>
      </View>
       
       <View style={styles.containerVasos}>
         <View style={styles.aguaText}>
            <Text>Agua</Text>
            <Text>2 tazas</Text>
         </View>
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
    marginTop:10,
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
    paddingTop:10,
    paddingBottom:10
  },
  aguaText :{
    display: 'flex',
    paddingLeft:10,
    paddingRight:10,
    paddingTop:5,
    paddingBottom:5,
    width: '100%'
  }
})

export default ContenedorAgua