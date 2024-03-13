import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


export const Item = ({texto,total,objetivo,restan}) => {
  return (
       <View style={styles.item}>
          <Text style={styles.text}>{texto}</Text>
          <View style={styles.tres}>
            <Text style={styles.text}>{total}<Text style={styles.gramos}> g</Text></Text>
            <Text style={styles.text}>{objetivo}<Text style={styles.gramos}> g</Text></Text>
            <Text style={styles.text}>{restan}<Text style={styles.gramos}> g</Text></Text>
          </View>
       </View>
  )
}

const MacrosScreen = () => {
  return (
    <View style={styles.contenedor}>
      <View style={styles.container}>
        <View><Text>Total</Text></View>
        <View><Text>Objetivo</Text></View>
        <View><Text>Restan</Text></View>
      </View>

      <Item texto="Proteinas" total="70" objetivo="50" restan="45" />
      <Item texto="Carbohidratos" total="70" objetivo="50" restan="45" />
      <Item texto="Grasas" total="70" objetivo="50" restan="45" />

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    display: 'flex',
    flexDirection: 'row',
    gap:20,
    justifyContent:'flex-end',
    backgroundColor: '#Fff',
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 15,
    },
    contenedor:{
      flex: 1,
      backgroundColor: '#F5F2F2'
    },
    item: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 20,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 15,
      paddingBottom: 15,
      width: '100%',
      backgroundColor: '#FFFF',
      borderTopWidth: 0.5,
      borderTopColor: '#ccc',
      marginBottom:0.5
    },
    tres: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent:'space-between',
      gap:38,
      marginRight:'2%',
    },
    gramos: {
      color: '#ABA8A8',
    }
})


export default MacrosScreen