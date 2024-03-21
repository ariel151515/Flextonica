import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CustomHeader from '../../components/CustomHeader';

export const Item = ({ pesoInicial, 
                       nivelDeActividad,
                       edad,
                       tmb,
                       deficitCalorico,
                       proteinas,
                       carbohidratos,
                       grasas,
                       margen,
                       calorias,
                       gris
                       }) => {

  return (
    <View style={[styles.item, { backgroundColor: gris ? '#FBF6F6' : '#fff' }]}>
      <View>
        <Text style={styles.comida}>
             {pesoInicial && 'Peso inicial'}
             {nivelDeActividad && 'Nivel de actividad'}
             {edad && 'Edad'}
             <Text style={{color:'#000', fontWeight:'bold'}}>{tmb && 'TMB'}</Text>
             {deficitCalorico && 'Deficit calorico'}
             {proteinas && (<><Text>Proteinas</Text><Text style={{color:'#A2A0A0'}}>  100 g </Text></>)}
             {carbohidratos && (<><Text>Carbohidratos</Text><Text style={{color:'#A2A0A0'}}>  340 g </Text></>)}
             {grasas && (<><Text>Grasas</Text><Text style={{color:'#A2A0A0'}}>  20 g </Text></>)}
             {margen && 'Margen'}
             <Text style={{fontWeight:'bold'}}>{calorias && 'Calorias a consumir'}</Text>
        </Text>
      </View>
      <View style={styles.pp}>
        <Text style={{color:'#6200EE'}}>
             {pesoInicial && pesoInicial}
             {nivelDeActividad && nivelDeActividad}
             {edad && edad}
             <Text style={{color:'#000', fontWeight:'bold'}}>{tmb && tmb}</Text>
             {deficitCalorico && deficitCalorico}
             <Text style={{color:'#6200EE'}}>{proteinas && proteinas}</Text>
             <Text style={{color:'#6200EE'}}>{carbohidratos && carbohidratos}</Text>
             <Text style={{color:'#6200EE'}}>{grasas && grasas }</Text>
             {margen && margen}
             <Text style={{fontWeight:'bold', color:'#000'}}>{calorias && calorias}</Text>
        </Text>
        <Text style={{color:'#6200EE'}}>
             {pesoInicial && ' Kg'}
             {nivelDeActividad && null}
             {edad && null}
             <Text style={{color:'#000', fontWeight:'bold'}}>{tmb && ' Kcal'}</Text>
             {deficitCalorico && ' %'}
             <Text style={{color:'#6200EE'}}>{proteinas && ' %'}</Text>
             <Text style={{color:'#6200EE'}}>{carbohidratos && ' %'}</Text>
             <Text style={{color:'#6200EE'}}>{grasas && ' %'}</Text>
             {margen && ' %'}
             <Text style={{fontWeight:'bold', color:'#000'}}>{calorias && ' Kcal'}</Text>
        </Text>
      </View>
    </View>
  );
}

const ObjetivosScreen = () => {
  return (
    <View style={styles.container}>
      <CustomHeader />
      <View style={styles.contenedorItem}>

        <Item 
           pesoInicial="60"
           nivelDeActividad=""
           edad=""
           tmb=""
           deficitCalorico=""
           proteinas=""
           carbohidratos=""
           grasas=""
           margen=""
           calorias=''
           gris=""
            />

       <Item 
           pesoInicial=""
           nivelDeActividad="Muy activo"
           edad=""
           tmb=""
           deficitCalorico=""
           proteinas=""
           carbohidratos=""
           grasas=""
           margen=""
           calorias=''
           gris=""
            />    

       <Item 
           pesoInicial=""
           nivelDeActividad=""
           edad="35"
           tmb=""
           deficitCalorico=""
           proteinas=""
           carbohidratos=""
           grasas=""
           margen=""
           calorias=''
           gris=""
            />    

      <Item 
           pesoInicial=""
           nivelDeActividad=""
           edad=""
           tmb="1678"
           deficitCalorico=""
           proteinas=""
           carbohidratos=""
           grasas=""
           margen=""
           calorias=''
           gris="gris"
            />    

       <Item 
           pesoInicial=""
           nivelDeActividad=""
           edad=""
           tmb=""
           deficitCalorico="30"
           proteinas=""
           carbohidratos=""
           grasas=""
           margen=""
           calorias=''
           gris=""
            />     

      <Item 
           pesoInicial=""
           nivelDeActividad=""
           edad=""
           tmb=""
           deficitCalorico=""
           proteinas="30"
           carbohidratos=""
           grasas=""
           margen=""
           calorias=''
           gris=""
            />     

      <Item 
           pesoInicial=""
           nivelDeActividad=""
           edad=""
           tmb=""
           deficitCalorico=""
           proteinas=""
           carbohidratos="50"
           grasas=""
           margen=""
           calorias=''
           gris=""
            />    

      <Item 
           pesoInicial=""
           nivelDeActividad=""
           edad=""
           tmb=""
           deficitCalorico=""
           proteinas=""
           carbohidratos=""
           grasas="20"
           margen=""
           calorias=''
           gris=""
            />   


      <Item 
           pesoInicial=""
           nivelDeActividad=""
           edad=""
           tmb=""
           deficitCalorico=""
           proteinas=""
           carbohidratos=""
           grasas=""
           margen=""
           calorias='1678'
           gris="gris"
            />    

      <Item 
           pesoInicial=""
           nivelDeActividad=""
           edad=""
           tmb=""
           deficitCalorico=""
           proteinas=""
           carbohidratos=""
           grasas=""
           margen="5"
           calorias=''
           gris=""
            />   

      </View>
    </View>
  )
}

// Estilos
const styles = StyleSheet.create({
  backButton: {
    marginLeft: 15,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 0.6,
    borderBottomColor: '#EAEBEC',
  },
  comida: {
    color: '#000',
  },
  contenedorItem: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#Ffff',
  },
  pp: {
    flexDirection: 'row',
    alignItems: 'center', // Alinea verticalmente los elementos en esta vista
  },
});

export default ObjetivosScreen;
