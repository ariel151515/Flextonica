import React, {useState} from 'react';
import { View, Text, StyleSheet, Platform, TextInput } from 'react-native';


export const Box = () => {

  const [value0, setValue0] = useState("DAY");
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
    <View style={styles.contenedor}>
      <View style={styles.header}>
          <View>
            <TextInput
                  style={[styles.textBox, { width: 60, textAlign: 'center', color: 'white', fontWeight:'bold',textAlign:'center', paddingTop:'10', borderColor: 'white', borderWidth: 1 }]} // Establecer el ancho
                  value={value0}
                  onChangeText={text => handleInputChange(text, setValue1)}
                  editable={true} // Primer input editable
                  placeholder="0000"
                  keyboardType="numeric" // Solo números
                />
          </View>
          <View style={styles.headerItems}>
              <TextInput
                style={[styles.textBox, { width: 60, textAlign: 'center', color: 'white', fontWeight:'bold',textAlign:'center', paddingTop:'10', borderColor: 'white', borderWidth: 1 }]} // Establecer el ancho
                value={value1}
                onChangeText={text => handleInputChange(text, setValue1)}
                editable={true} // Primer input editable
                placeholder="0000"
                keyboardType="numeric" // Solo números
              />
               <TextInput
                style={[styles.textBox, { width: 60, textAlign: 'center', color: 'white', fontWeight:'bold',textAlign:'center', paddingTop:'10', borderColor: 'white', borderWidth: 1 }]} // Establecer el ancho
                value={value2}
                onChangeText={text => handleInputChange(text, setValue1)}
                editable={true} // Primer input editable
                placeholder="0000"
                keyboardType="numeric" // Solo números
              />
               <TextInput
                style={[styles.textBox, { width: 60, textAlign: 'center', color: 'white', fontWeight:'bold',textAlign:'center', paddingTop:'10', borderColor: 'white', borderWidth: 1 }]} // Establecer el ancho
                value={value3}
                onChangeText={text => handleInputChange(text, setValue1)}
                editable={true} // Primer input editable
                placeholder="0000"
                keyboardType="numeric" // Solo números
              />
               <TextInput
                style={[styles.textBox, { width: 60, textAlign: 'center', color: 'white', fontWeight:'bold', textAlign:'center', paddingTop:'10', borderColor: 'white', borderWidth: 1 }]} // Establecer el ancho
                value={value4}
                onChangeText={text => handleInputChange(text, setValue1)}
                editable={true} // Primer input editable
                placeholder="0000"
                keyboardType="numeric" // Solo números
              />
          </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  contenedor: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  header: {
    display:'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    width: '100%',
    backgroundColor: '#0B5CFF',
    padding: 15,
  },
  headerItems: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    gap:10,
    backgroundColor: '#0B5CFF',
  }
});

export default Box;
