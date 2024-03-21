import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BoxGraficoMesesPeso from '../../../components/BoxGraficoMesesPeso'

const PesoScreen = () => {
  return (
    <View>
      <BoxGraficoMesesPeso />
    </View>
  )
}


const styles = StyleSheet.create({
    backButton: {
      marginLeft: 15,
    },
  });
  
export default PesoScreen