import React, {useState} from 'react';
import { View, Text, StyleSheet, Platform, TextInput } from 'react-native';


export const Box = ({titulo}) => {

  const [value1, setValue1] = useState("KCAL");
  const [value2, setValue2] = useState("CH");
  const [value3, setValue3] = useState("GS");
  const [value4, setValue4] = useState("PR");

  const handleInputChange = (text, setValue) => {
    if (text === "0") {
      setValue("");
    } else {
      setValue(text);
    }
  };


  return (
    <View style={styles.container}>
    <View style={styles.itemContainer}>

      <View style={styles.textDia}>
        <Text style={styles.textDiaT}>{titulo}</Text>
      </View>

      <View style={styles.contenedorTextBox}>
        <TextInput
          style={[styles.textBox, { width: 60, textAlign: 'center' }]} // Establecer el ancho
          value={value1}
          onChangeText={text => handleInputChange(text, setValue1)}
          editable={true} // Primer input editable
          placeholder="0000"
          keyboardType="numeric" // Solo números
        />
        <TextInput
          style={[styles.textBox, { width: 60, textAlign: 'center' }]} // Establecer el ancho
          value={value2}
          editable={false} // Deshabilitar edición
          placeholder="0000"
        />
        <TextInput
          style={[styles.textBox, { width: 60, textAlign: 'center' }]} // Establecer el ancho
          value={value3}
          editable={false} // Deshabilitar edición
          placeholder="0000"
        />
        <TextInput
          style={[styles.textBox, { width: 60, textAlign: 'center' }]} // Establecer el ancho
          value={value4}
          editable={false} // Deshabilitar edición
          placeholder="0000"
        />
 
      </View>
    </View>
  </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#0B5CFF',
    //paddingLeft: 14,
    //paddingRight:15,

    //paddingTop:5,
    //paddingBottom:5
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Alineación vertical
  },
  contenedorTextBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Alineación vertical
    width: '75%',
    paddingRight:15
  },
  textBox: {
    marginLeft: 0,
    color: '#fff',
    fontWeight:'bold',

    // paddingVertical: 5,
    // marginHorizontal: 5,

    borderRadius: 5,
    borderColor: '#fff',
    borderWidth:0,
  },
  textDiaT:{
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight:'bold',
  },
  textDia: {
    display:'flex',
    alignItems: 'center', // Alineación vertical
    backgroundColor:'#0C4FD4',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 14,
    paddingRight: 18,
    borderColor: '#fff',
  }
});

export default Box;
