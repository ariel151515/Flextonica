import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; // Asegúrate de importar MaterialIcons de acuerdo a tu configuración

export const Item = ({ comida, hora }) => {
  const [switchValue, setSwitchValue] = useState(false);

  const toggleSwitch = () => {
    setSwitchValue(previousState => !previousState);
  };

  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.comida}>{comida}</Text>
        <Text style={styles.hora}>{hora}</Text>
      </View>
      <View>
        <Switch
          trackColor={{ false: "#ADADAD", true: "#B17FF7" }}
          thumbColor={switchValue ? "#6200EE" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={switchValue}
        />
      </View>
    </View>
  );
}

const RecordatoriosScreen = () => {

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
        <Item comida="Desayuno" hora="10:13" />
        <Item comida="Pechuga de pollo" hora="12:13" />
        <Item comida="Cena" hora="6:30" />
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 0.6,
    borderBottomColor: '#EAEBEC',
    verticalAlign: 'middle'
  },
  valor: {
    color: '#0B5CFF',
  },
  contenedorItem: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#Ffff',
  },
  hora: {
    color: '#8B8888',
  }
});

export default RecordatoriosScreen;
