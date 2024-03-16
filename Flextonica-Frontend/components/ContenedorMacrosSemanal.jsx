import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export const Item = ({ dia }) => {
  const [value1, setValue1] = useState("244");
  const [value2, setValue2] = useState("34");
  const [value3, setValue3] = useState("120");
  const [value4, setValue4] = useState("120");

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
          <Text>{dia}</Text>
        </View>

        <View style={styles.contenedorTextBox}>
          <TextInput
            style={[styles.textBox, { width: 60, textAlign: 'center', color:'#6200EE' }]} // Establecer el ancho
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


const ContenedorMacrosSemanal = () => {
  return (
    <View style={styles.containerBox}>
      <Item dia="Lun 13" />
      <View style={{ backgroundColor: '#D9DBDD', height: 0.7 }}></View>
      <Item dia="Mar 13" />
      <View style={{ backgroundColor: '#D9DBDD', height: 0.7 }}></View>
      <Item dia="Mie 13" />
      <View style={{ backgroundColor: '#D9DBDD', height: 0.7 }}></View>
      <Item dia="Jue 13" />
      <View style={{ backgroundColor: '#D9DBDD', height: 0.7 }}></View>
      <Item dia="Vie 13" />
      <View style={{ backgroundColor: '#D9DBDD', height: 0.7 }}></View>
      <Item dia="Sab 13" />
      <View style={{ backgroundColor: '#D9DBDD', height: 0.7 }}></View>
      <Item dia="Dom 13" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom:2,
    paddingTop: 2,
    marginTop: 10,
    marginBottom: 10,
  },
  containerBox: {
    flex: 1,
    backgroundColor: '#fff',

    marginTop: 10,
    marginBottom: 10,

    paddingLeft: 12,
    paddingRight: 12,

    paddingTop:0
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Alineación vertical
  },
  textDia: {
    marginLeft: 0,
    color: '#000',
  },
  contenedorTextBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Alineación vertical
    width: '77%',
  },
  textBox: {
    marginLeft: 0,
    color: '#000',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
    borderRadius: 5,
    borderColor: '#fff',
    borderWidth: 1,
  },
});

export default ContenedorMacrosSemanal;
