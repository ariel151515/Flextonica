import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Platform, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export const ItemMenu = ({ peso, cuello, cintura, caderas, foto }) => {

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
          <MaterialIcons name="arrow-back" size={24} color="#fff" style={{marginLeft:0}}/>
        </TouchableOpacity>
      ),
     
    });

  }, [navigation]);


  return (
    <View style={styles.contenedorItemMenu}>
      <View style={styles.contenM}>
        <View>
          {peso && <Text>Peso</Text>}
          {cuello && <Text>Cuello</Text>}
          {cintura && <Text>Cintura</Text>}
          {caderas && <Text>Caderas</Text>}
          {foto && <Text>Foto</Text>}
        </View>
        <View>
          {peso && <Text style={{ color: '#0B5CFF' }}>{peso} Kg</Text>}
          {cuello && <Text style={{ color: '#0B5CFF' }}>{cuello} </Text>}
          {cintura && <Text style={{ color: '#0B5CFF' }}>{cintura} </Text>}
          {caderas && <Text style={{ color: '#0B5CFF' }}>{caderas} </Text>}
          {foto && <Image source={foto} style={{ width: 24, height: 24 }} />}
        </View>
      </View>
    </View>
  );
};

const AddSeguimiento = () => {
  const foto = require('./../../assets/avatar.png');

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ItemMenu peso="56" />
      <ItemMenu cuello="67" />
      <ItemMenu cintura="56" />
      <ItemMenu caderas="34" />
      <ItemMenu foto={foto} />
    </View>
  );
};

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 15,
  },
  contenedorItemMenu: {
    display: 'flex',
    width: '100%',
    paddingLeft: 5,
    paddingRight: 5,
    borderTopWidth: 1,
    borderTopColor: '#D9D9D9',
  },
  contenM: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default AddSeguimiento;
