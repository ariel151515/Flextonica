import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const MesesScreen = () => {
  return (
    <View>
      <Text>MesesScreen</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    backButton: {
      marginLeft: 15,
    },
  });
  
export default MesesScreen