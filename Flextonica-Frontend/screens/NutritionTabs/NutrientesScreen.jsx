import { View, Text, StyleSheet, ScrollView  } from 'react-native';
import React from 'react'


export const Linea = ({ texto }) => {
  return (
    <View>
      {texto === 'Proteinas' && <View style={styles.lineaP}></View>}
      {texto === 'Carbohidratos' && <View style={styles.lineaC}></View>}
      {texto === 'Grasas' && <View style={styles.lineaG}></View>}

      {texto === 'Fibra' && <View style={styles.lineaO}></View>}
      {texto === 'Azucar' && <View style={styles.lineaO}></View>}

      {texto === 'Grasas saturadas' && <View style={styles.lineaO}></View>}
      {texto === 'Grasas poliinsaturadas' && <View style={styles.lineaO}></View>}
      {texto === 'Grasas monoinsaturadas' && <View style={styles.lineaO}></View>}
      {texto === 'Grasas trans' && <View style={styles.lineaO}></View>}
      
      {texto === 'Colesterol' && <View style={styles.lineaO}></View>}
      {texto === 'Sodio' && <View style={styles.lineaO}></View>}
      {texto === 'Potasio' && <View style={styles.lineaO}></View>}
      {texto === 'Vitamina A' && <View style={styles.lineaO}></View>}
      {texto === 'Vitamina C' && <View style={styles.lineaO}></View>}
      {texto === 'Calcio' && <View style={styles.lineaO}></View>}
      {texto === 'Hierro' && <View style={styles.lineaO}></View>}
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


const NutrientesScreen = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
        <View style={styles.contenedor}>
      <View style={styles.container}>
        <View><Text>Total</Text></View>
        <View><Text>Objetivo</Text></View>
        <View><Text>Restan</Text></View>
      </View>

      <Item texto="Proteinas" total="70" objetivo="50" restan="45" />
      <Item texto="Carbohidratos" total="70" objetivo="50" restan="45" />
      <Item texto="Grasas" total="70" objetivo="50" restan="45" />
      <Item texto="Fibra" total="70" objetivo="50" restan="45" />
      <Item texto="Azucar" total="70" objetivo="50" restan="45" />
      <Item texto="Grasas saturadas" total="70" objetivo="50" restan="45" />
      <Item texto="Grasas poliinsaturadas" total="70" objetivo="50" restan="45" />
      <Item texto="Grasas monoinsaturadas" total="70" objetivo="50" restan="45" />
      <Item texto="Grasas trans" total="70" objetivo="50" restan="45" />
      <Item texto="Colesterol" total="70" objetivo="50" restan="45" />
      <Item texto="Sodio" total="70" objetivo="50" restan="45" />
      <Item texto="Potasio" total="70" objetivo="50" restan="45" />
      <Item texto="Vitamina A" total="70" objetivo="50" restan="45" />
      <Item texto="Vitamina C" total="70" objetivo="50" restan="45" />
      <Item texto="Calcio" total="70" objetivo="50" restan="45" />
      <Item texto="Hierro" total="70" objetivo="50" restan="45" />
   </View>
    </ScrollView>
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
    color: '#807D7D',
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
    width: '60%',
    height: 5,
    backgroundColor: '#54C259',
    marginBottom:0.5,
    borderRadius:50
  },
  lineaG: {
    width: '25%',
    height: 5,
    backgroundColor: '#EC5F5F',
    marginBottom:0.5,
    borderRadius:50
  },
  lineaC: {
    width: '25%',
    height: 5,
    backgroundColor: '#0170BF',
    marginBottom:0.5,
    borderRadius:50
  },
  lineaO: {
    width: '25%',
    height: 5,
    backgroundColor: '#8C8C8C',
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


export default NutrientesScreen