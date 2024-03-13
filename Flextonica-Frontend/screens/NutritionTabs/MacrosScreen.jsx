import { View, Text, StyleSheet } from 'react-native';
import GraficoPorMacros from '../../components/GraficoPorMacros'
import React from 'react'


export const Linea = ({ texto }) => {
  return (
    <View>
      {texto === 'Proteinas' && <View style={styles.lineaP}></View>}
      {texto === 'Carbohidratos' && <View style={styles.lineaC}></View>}
      {texto === 'Grasas' && <View style={styles.lineaG}></View>}
    </View>
  );
};


export const Item = ({texto,total,objetivo,restan}) => {
  return (
    <View style={styles.it}>
    <View style={styles.item}>
      <Text style={styles.textA}>{texto}</Text>
      <View style={styles.tres}>
        <Text style={styles.text}>{total}<Text style={styles.gramos}></Text></Text>
        <Text style={styles.text}>{objetivo}<Text style={styles.gramos}></Text></Text>
        <Text style={styles.text}>{restan}<Text style={styles.gramos}> g</Text></Text>
      </View>
    </View>

     <View style={styles.contenedorLinea}>
        <Linea texto={texto} />
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
    gap:50,
    marginRight:'2%',
  },
  gramos: {
    color: '#ABA8A8',
  },
  contenedorGrafico: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#FFFF',
    marginBottom:0.5,
    marginTop:10
  },
  lineaP: {
    width: '45%',
    height: 5,
    backgroundColor: '#54C259',
    marginBottom:0.5,
    borderRadius:50
  },
  lineaG: {
    width: '20%',
    height: 5,
    backgroundColor: '#EC5F5F',
    marginBottom:0.5,
    borderRadius:50
  },
  lineaC: {
    width: '35%',
    height: 5,
    backgroundColor: '#0170BF',
    marginBottom:0.5,
    borderRadius:50
  },
  it:{
    display: 'flex',
    flexDirection: 'column',
    paddingBottom:15,
    backgroundColor:'#fff',
  },
  contenedorLinea: {
    width: '95%',
    display: 'flex',
    marginLeft: 10,
    backgroundColor:'#E9E5E5',
    borderRadius:50
  },
  text: {
    color:'#807D7D',
  }
})



export default MacrosScreen