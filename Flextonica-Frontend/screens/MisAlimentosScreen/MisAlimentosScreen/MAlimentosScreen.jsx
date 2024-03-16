import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import SearchAlimentos from '../../../components/SearchAlimentos'


const MisalimentosTabs = () => {

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
    <View style={{flex:1, backgroundColor:'#fff', padding:10}}>
      <SearchAlimentos />
    </View>
  )
}

const styles = StyleSheet.create({
     container: {
     display: 'flex',
    },
  });
  
export default MisalimentosTabs;
