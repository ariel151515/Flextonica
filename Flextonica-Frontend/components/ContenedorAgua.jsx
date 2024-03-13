import { View, Text, StyleSheet, Image  } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react'

const ContenedorAgua = () => {
  return (
    <View style={styles.container}>
      <View style={styles.barraTop}>
        <Text style={styles.aguaTop}>Agua</Text>
        <View>
        <MaterialCommunityIcons name="note-edit-outline" size={20} color="black" />
        </View>
      </View>
       
       <View style={styles.containerVasos}>
         <View><Image source={require('../assets/vaso.png')} /></View>
         <View><Image source={require('../assets/vaso.png')} /></View>
         <View><Image source={require('../assets/vaso.png')} /></View>
         <View><Image source={require('../assets/vaso.png')} /></View>
         <View><Image source={require('../assets/vaso.png')} /></View>
         <View><Image source={require('../assets/vaso.png')} /></View>
         <View><Image source={require('../assets/vaso.png')} /></View>
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
    paddingBottom:10}
})

export default ContenedorAgua