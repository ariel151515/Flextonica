import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const PerfilUserScreen = () => {

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
            onPress={() => navigation.navigate('MenuScreen')} // Aquí modificamos la función onPress para navegar a MenuScreen
          >
            <MaterialIcons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
        ),
      });
    }, [navigation]);

  return (
    <View>
      <Text>Objetivos Screen</Text>
    </View>
  )
}

// Definición de estilos
const styles = StyleSheet.create({
  backButton: {
    marginLeft: 15,
  },
});

export default PerfilUserScreen;
