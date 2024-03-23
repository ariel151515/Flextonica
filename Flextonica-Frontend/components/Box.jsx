import React, {useState} from 'react';
import { View, Text, StyleSheet, Platform, TextInput } from 'react-native';
import Color from '../components/Color.js';

export const Box = ({titulo}) => {

  const [value1, setValue1] = useState("KCAL");
  const [value2, setValue2] = useState("CH");
  const [value3, setValue3] = useState("GS");
  const [value4, setValue4] = useState("PR");

  const [value1C, setValue1C] = useState("2345");
  const [value2C, setValue2C] = useState("334");
  const [value3C, setValue3C] = useState("56");
  const [value4C, setValue4C] = useState("100");

  const handleInputChange = (text, setValue) => {
    if (text === "0") {
      setValue("");
    } else {
      setValue(text);
    }
  };


  return (
    <View style={styles.containerB}>

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
    <View>
</View>


    <View style={styles.containerC}>
        <View style={styles.itemContainer}>

        <View style={styles.textDiaC}>
          <Text style={styles.textDiaTC}>Objetivo</Text>
        </View>

        <View style={styles.contenedorTextBox}>
          <TextInput
            style={[styles.textBoxC, { width: 60, textAlign: 'center', color:'#000' }]} // Establecer el ancho
            value={value1C}
            onChangeText={text => handleInputChange(text, setValue1)}
            editable={false} // Primer input editable
            placeholder="0000"
            keyboardType="numeric" // Solo números
          />
          <TextInput
            style={[styles.textBoxC, { width: 60, textAlign: 'center', color:'#000' }]} // Establecer el ancho
            value={value2C}
            editable={false} // Deshabilitar edición
            placeholder="0000"
          />
          <TextInput
            style={[styles.textBoxC, { width: 60, textAlign: 'center', color:'#000' }]} // Establecer el ancho
            value={value3C}
            editable={false} // Deshabilitar edición
            placeholder="0000"
          />
          <TextInput
            style={[styles.textBoxC, { width: 60, textAlign: 'center', color:'#000' }]} // Establecer el ancho
            value={value4C}
            editable={false} // Deshabilitar edición
            placeholder="0000"
          />
        </View>
      </View>
    </View>


    <View style={styles.containerC}>
          <View style={styles.itemContainer}>

        <View style={styles.textDiaC}>
          <Text style={[styles.textDiaTC, {fontWeight:'bold'}]}>Totales</Text>
        </View>

        <View style={styles.contenedorTextBox}>
          <TextInput
            style={[styles.textBoxC, { width: 60, textAlign: 'center', color:'#000', fontWeight:'bold' }]} // Establecer el ancho
            value={value1C}
            onChangeText={text => handleInputChange(text, setValue1)}
            editable={false} // Primer input editable
            placeholder="0000"
            keyboardType="numeric" // Solo números
          />
          <TextInput
            style={[styles.textBoxC, { width: 60, textAlign: 'center', color:'#000', fontWeight:'bold' }]} // Establecer el ancho
            value={value2C}
            editable={false} // Deshabilitar edición
            placeholder="0000"
          />
          <TextInput
            style={[styles.textBoxC, { width: 60, textAlign: 'center', color:'#000', fontWeight:'bold' }]} // Establecer el ancho
            value={value3C}
            editable={false} // Deshabilitar edición
            placeholder="0000"
          />
          <TextInput
            style={[styles.textBoxC, { width: 60, textAlign: 'center', color:'#000', fontWeight:'bold' }]} // Establecer el ancho
            value={value4C}
            editable={false} // Deshabilitar edición
            placeholder="0000"
          />
        </View>
      </View>
    </View>


    <View style={styles.containerC}>
        <View style={styles.itemContainer}>

        <View style={styles.textDiaC}>
          <Text style={styles.textDiaTC}>Restantes</Text>
        </View>

        <View style={styles.contenedorTextBox}>
          <TextInput
            style={[styles.textBoxC, { width: 60, textAlign: 'center', color:'#000' }]} // Establecer el ancho
            value={value1C}
            onChangeText={text => handleInputChange(text, setValue1)}
            editable={false} // Primer input editable
            placeholder="0000"
            keyboardType="numeric" // Solo números
          />
          <TextInput
            style={[styles.textBoxC, { width: 60, textAlign: 'center', color:'#000' }]} // Establecer el ancho
            value={value2C}
            editable={false} // Deshabilitar edición
            placeholder="0000"
          />
          <TextInput
            style={[styles.textBoxC, { width: 60, textAlign: 'center', color:'#000' }]} // Establecer el ancho
            value={value3C}
            editable={false} // Deshabilitar edición
            placeholder="0000"
          />
          <TextInput
            style={[styles.textBoxC, { width: 60, textAlign: 'center', color:'#000' }]} // Establecer el ancho
            value={value4C}
            editable={false} // Deshabilitar edición
            placeholder="0000"
          />
        </View>
      </View>
    </View>
    
    <View>
     </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Color.azul_base,
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
    paddingRight:15,
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
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
    fontWeight:'bold',
  },
  textDia: {
    display:'flex',
    alignItems: 'center', // Alineación vertical
    backgroundColor:Color.azul_oscuro,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 14,
    paddingRight: 18,
    borderColor: '#fff',
  },
  containerB:{
    width:'100%',
    paddingBottom: 10,
    backgroundColor:'#ffff',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.16)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  textDiaC:{
    color:'#000'
  },
  textDiaTC: {
    color:'#000',
    paddingLeft:12
  },
  containerC:{
    backgroundColor:'#ffff',
    paddingTop:4,
    paddingBottom:4,
  }

});

export default Box;
