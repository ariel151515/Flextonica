import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import createUserWithFirebaseUIDInMongo from '../../function/createUserWithFirebaseUIDInMongo'; // Asegúrate de importar la función correctamente

const TableroScreen = () => {
  useEffect(() => {
    // Llama a la función correctamente
    createUserWithFirebaseUIDInMongo();
  }, []);

  return (
    <View>
      <Text>TableroScreen</Text>
      <Text>TableroScreen</Text>
      <Text>TableroScreen</Text>
      <Text>TableroScreen</Text>
      <Text>TableroScreen</Text>
      <Text>TableroScreen</Text>
      <Text>TableroScreen</Text>
      <Text>TableroScreen</Text>
      <Text>TableroScreen</Text>
      <Text>TableroScreen</Text>
    </View>
  );
};

export default TableroScreen;
