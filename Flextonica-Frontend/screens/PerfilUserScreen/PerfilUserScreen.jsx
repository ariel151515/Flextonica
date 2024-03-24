import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Asegúrate de importar MaterialIcons de acuerdo a tu configuración
import CustomHeader from '../../components/CustomHeader';
import { useNavigation } from '@react-navigation/native';

export const Item = ({clave, valor}) => {
    return (
        <View style={styles.item}>
            <View><Text>{clave}</Text></View>
            <View><Text style={styles.valor}>{valor}</Text></View>
        </View>
    );
}

const PerfilUserScreen = () => {
  
  const navigation = useNavigation(); // Mueve la declaración de useNavigation aquí

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#fff',
      headerLeft: () => (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()} // Utilizamos navigation.goBack() para regresar a la pantalla anterior
        >
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
       <CustomHeader />
           <View style={styles.contenedorItem}>
                <Item clave="Nombre" valor="Ariel Gentile" />
                <Item clave="Email" valor="vipndcfitness@gmail.com"/>
                <Item clave="Sucripcion" valor="Estandar"/>
           </View>
    </View>
  )
}

// Definición de estilos
const styles = StyleSheet.create({
  backButton: {
    marginLeft: 15,
  },
  item:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 0.6,
    borderBottomColor: '#EAEBEC',
  },
  valor:{
    color: '#0B5CFF',
  },
  contenedorItem:{
    flex: 1,
  },
  container: { // Estilo del contenedor principal
    flex: 1,
    backgroundColor: '#Ffff', // Color de fondo opcional
  }
});

export default PerfilUserScreen;
