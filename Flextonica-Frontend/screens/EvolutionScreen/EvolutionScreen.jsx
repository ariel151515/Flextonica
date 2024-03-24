import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity,  Dimensions, Platform, Image, ScrollView  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import BoxGraficoMesesPeso from '../../components/BoxGraficoMesesPeso'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export const MenuProgreso = () => {
   return(
    <View style={styles.contenedorMenu}>
      <View style={styles.boxuno}>
        <View>
            <Ionicons name="analytics" size={24} color="#958D8D" />
        </View>
        <View>
          <Text style={{color:'#958D8D'}}>Peso</Text>
        </View>
      </View>
      <View style={styles.boxdos}>
          <View>
            <Entypo name="calendar" size={24} color="#958D8D" />
          </View>
          <View>
            <Text style={{color:'#958D8D'}}>Meses</Text>
          </View>
      </View>
    </View>
   )
}

export const ItemMenu = ({texto,icono}) => {
  return(
    <View style={styles.contenedorItemMenu}>
      <View style={styles.contenM}>
        <View>
          <Text>martes, 13 de dic de 2022</Text>
          <Text style={{color:'#958D8D'}}>57.6 Kg</Text>
        </View>

        <View style={{marginTop:5}}>
          <Image source={require('../../assets/avatar.png')} style={styles.imagen} />
        </View>

      </View>
    </View>
  )
}


const EvolutionScreen = () => {

  const navigation = useNavigation();

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
    <View style={{ flex: 1 }}>
      <MenuProgreso />
      <ScrollView showsVerticalScrollIndicator={false}>
        <BoxGraficoMesesPeso text="Peso en Kg" />
        <ItemMenu />
        <ItemMenu />
        <ItemMenu />
        <ItemMenu />
        <ItemMenu />
        <ItemMenu />
        <ItemMenu />
        <ItemMenu />
        <ItemMenu />
        <ItemMenu />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    backButton: {
      marginLeft: 15,
    },
    contenedorMenu: {
      width:'100%',
      display: "flex",
      marginBottom:5,
      backgroundColor:'#fff',
      flexDirection: 'row',
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 2,
        },
        android: {
          elevation: 4,
        },
      }),
    },
    boxuno:{
      width:'50%',
      backgroundColor:'#fff',
      textAlign:'center',
      padding:20,
      display: 'flex',
      justifyContent:'space-between',
      flexDirection:'row'
    },
    boxdos:{
      width:'50%',
      backgroundColor:'#fff',
      borderLeftWidth: 1,
      borderLeftColor: '#D9D9D9',
      padding:20,
      display: 'flex',
      justifyContent:'space-between',
      flexDirection:'row'
    },
    contenedorItemMenu:{ 
        display:'flex',
        width: '100%',

        paddingLeft:10,
        paddingRight:10,
        paddingTop:20,
        paddingBottom:20,

        backgroundColor:'#fff',
        borderTopWidth:1,
        borderTopColor:'#D9D9D9',
    },
    contenM: {
      display: 'flex',
      flexDirection:'row',
      justifyContent: 'space-between',
      paddingLeft:10,
      paddingRight:10,
      itemAlign: 'center'
    }
  });

export default EvolutionScreen