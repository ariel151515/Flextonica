import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';


export const Item = ({ titulo, textoCantidad, textoRecordatorio, cantidad, recordatorio }) => {
    return (
      <>
        {titulo && ( // Verifica si titulo está presente
          <View style={styles.item}>
            <View><Text style={{fontWeight:'bold', fontSize:18}}>{titulo}</Text></View>
            <View><Text style={styles.valor}></Text></View>
          </View>
        )}
        {textoCantidad && ( // Verifica si titulo está presente
          <View style={styles.item}>
            <View><Text>{textoCantidad}</Text></View>
            <View><Text style={styles.valor}>{cantidad} g</Text></View>
          </View>
        )}
        {textoRecordatorio && ( // Verifica si titulo está presente
          <View style={styles.item}>
            <View><Text>{textoRecordatorio}</Text></View>
            <View><Text style={styles.valor}>{recordatorio}</Text></View>
          </View>
        )}
      </>
    );
  };
  

export const Datos = ({calorias, c, g, p}) => {
    return(
        <View style={styles.itemValores}>
            <View style={styles.itemD}>
                <View><Text style={{fontWeight:'bold', fontSize:18, color:'#0B5CFF'}}>{calorias}</Text></View>
                <View><Text style={[styles.valor, { color: '#939292' }]}>Calorias</Text></View>
            </View>
            <View style={styles.itemD}>
                <View><Text style={{fontWeight:'bold', fontSize:18}}>{p} g</Text></View>
                <View><Text style={[styles.valor, { color: '#939292' }]}>Proteinas</Text></View>
            </View>
            <View style={styles.itemD}>
                <View><Text style={{fontWeight:'bold', fontSize:18}}>{c} g</Text></View>
                <View><Text style={[styles.valor, { color: '#939292' }]}>Carbohidratos</Text></View>
            </View>
            <View style={styles.itemD}>
                <View><Text style={{fontWeight:'bold', fontSize:18}}>{g} g</Text></View>
                <View><Text style={[styles.valor, { color: '#939292' }]}>Grasas</Text></View>
            </View>
        </View>
    )
  }


const AddAlimento = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#0B5CFF',
      },
      headerTintColor: '#fff',
      headerLeft: () => (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('MenuScreen')}
        >
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={styles.checkButton}
          onPress={() => {
            // Aquí puedes colocar la lógica para manejar el evento de presionar el botón de check
          }}
        >
          <MaterialIcons name="check" size={24} color="#fff" />
        </TouchableOpacity>
      ),
      tabBarVisible: false, // Oculta la barra de pestañas
    });

  }, [navigation]);

  return (
    <View style={{flex:1, backgroundColor:'#fff'}}>
      <Item titulo="Galletitas de salvado granix" cantidad="100" recordatorio="22.30" textoCantidad=""/>
      <Item cantidad="100" textoCantidad="Tamaño de la raciones" />
      <Item recordatorio="22.30" textoRecordatorio="Recordatorio"/>
      <Datos calorias="560" p="100" c="345" g="47"/>
    </View>
  );
};

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 10,
  },
  checkButton: {
    marginRight: 10,
  },
  item:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1, // Corrección aquí
    borderColor: '#EAE8E8', // Asumiendo que el color del borde debe ser negro, puedes cambiarlo según sea necesario
  },
  valor: {
    color: '#0B5CFF',
  },
  itemValores: {
    display: 'flex',
    flexDirection:'row',
    gap:30,
    paddingLeft:10,
    paddingRight:10,
    paddingTop:30,
    paddingBottom:10,
    justifyContent: 'center',
  },
  itemD: {
    display: 'flex',
    alignItems: 'center',
  }
});

export default AddAlimento;
