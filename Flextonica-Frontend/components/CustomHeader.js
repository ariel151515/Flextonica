import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

export const headerStyles = StyleSheet.create({
  backButton: {
    marginLeft: 15,
  },
});

const CustomHeader = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#0B5CFF',
      },
      headerTintColor: '#fff',
      headerLeft: () => (
        <TouchableOpacity
          style={headerStyles.backButton} // Utilizando los estilos exportados
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return null;
};

export default CustomHeader;
