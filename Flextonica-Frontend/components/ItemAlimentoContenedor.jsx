import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export const Item = ({ comida, proteinas, carbohidratos, grasas}) => {
  return (
    <View style={styles.itemContenedor}>
      <View style={styles.item}>
        <Text>{comida}</Text>
        <Text style={{fontSize:13, color:'#8C8C8C'}}>100g = {proteinas} Kcal / P:{proteinas}g  C:{carbohidratos}g  G:{grasas}g </Text>
      </View>
      <TouchableOpacity style={styles.icono}> 
        <MaterialIcons name="add" size={24} color="#0170BF" />
      </TouchableOpacity>
    </View>
  )
}

const ItemAlimentoContenedor = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Item comida="Galletitas de salvado granix" calorias="347" proteinas="13" carbohidratos="234" grasas="45" />
      <Item comida="Galletitas de salvado granix" calorias="347" proteinas="13" carbohidratos="234" grasas="45" />
      <Item comida="Galletitas de salvado granix" calorias="347" proteinas="13" carbohidratos="234" grasas="45" />
      <Item comida="Galletitas de salvado granix" calorias="347" proteinas="13" carbohidratos="234" grasas="45" />
      <Item comida="Galletitas de salvado granix" calorias="347" proteinas="13" carbohidratos="234" grasas="45" />
      <Item comida="Galletitas de salvado granix" calorias="347" proteinas="13" carbohidratos="234" grasas="45" />
      <Item comida="Galletitas de salvado granix" calorias="347" proteinas="13" carbohidratos="234" grasas="45" />
      <Item comida="Galletitas de salvado granix" calorias="347" proteinas="13" carbohidratos="234" grasas="45" />
      <Item comida="Galletitas de salvado granix" calorias="347" proteinas="13" carbohidratos="234" grasas="45" />
      <Item comida="Galletitas de salvado granix" calorias="347" proteinas="13" carbohidratos="234" grasas="45" />
      <Item comida="Galletitas de salvado granix" calorias="347" proteinas="13" carbohidratos="234" grasas="45" />
      <Item comida="Galletitas de salvado granix" calorias="347" proteinas="13" carbohidratos="234" grasas="45" />
      <Item comida="Galletitas de salvado granix" calorias="347" proteinas="13" carbohidratos="234" grasas="45" />
      <Item comida="Galletitas de salvado granix" calorias="347" proteinas="13" carbohidratos="234" grasas="45" />
      <Item comida="Galletitas de salvado granix" calorias="347" proteinas="13" carbohidratos="234" grasas="45" />
      <Item comida="Galletitas de salvado granix" calorias="347" proteinas="13" carbohidratos="234" grasas="45" />
      <Item comida="Galletitas de salvado granix" calorias="347" proteinas="13" carbohidratos="234" grasas="45" />
      <Item comida="Galletitas de salvado granix" calorias="347" proteinas="13" carbohidratos="234" grasas="45" />
      <Item comida="Galletitas de salvado granix" calorias="347" proteinas="13" carbohidratos="234" grasas="45" />
      <Item comida="Galletitas de salvado granix" calorias="347" proteinas="13" carbohidratos="234" grasas="45" />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  itemContenedor: {
    display: 'flex',
    backgroundColor:'#F9F6F6',
    paddingLeft: 15,
    paddingRight:15,
    paddingTop: 18,
    paddingBottom: 18,
    marginTop:5,
    borderRadius:5,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  icono: {
    padding: 2,
    borderRadius: 50,
    backgroundColor: '#D9D9D9',
  }
});

export default ItemAlimentoContenedor;
