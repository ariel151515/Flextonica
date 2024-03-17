import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';


export const Item = ({ titulo, cantidad, p, c, g, calorias}) => {
    return (
      <View style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <View style={{
               display:'flex', 
               justifyContent:'space-between', 
               flexDirection:'row', 
               borderBottomWidth:1,
               borderBlockColor:'#D9D9D9',
               paddingTop:20,
               paddingBottom:20,
               paddingLeft:10,
               paddingRight:10
               }}>
            <View>
                <Text>Nombre:</Text>
            </View>
            <View>
                <Text style={{color:'#0B5CFF'}} >{titulo}</Text>
            </View>
        </View>

        
        <View style={{
               display:'flex', 
               justifyContent:'space-between', 
               flexDirection:'row', 
               borderBottomWidth:1,
               borderBlockColor:'#D9D9D9',
               paddingTop:20,
               paddingBottom:20,
               paddingLeft:10,
               paddingRight:10
               }}>
            <View>
                <Text>Cantidad:</Text>
            </View>
            <View>
                <Text style={{color:'#0B5CFF'}}>{cantidad} g</Text>
            </View>
        </View>

        <View style={{
               display:'flex', 
               justifyContent:'space-between', 
               flexDirection:'row', 
               borderBottomWidth:1,
               borderBlockColor:'#D9D9D9',
               paddingTop:20,
               paddingBottom:20,
               paddingLeft:10,
               paddingRight:10
               }}>
            <View>
                <Text>Proteinas:</Text>
            </View>
            <View>
                <Text style={{color:'#0B5CFF'}}>{p} g</Text>
            </View>
        </View>

        <View style={{
               display:'flex', 
               justifyContent:'space-between', 
               flexDirection:'row', 
               borderBottomWidth:1,
               borderBlockColor:'#D9D9D9',
               paddingTop:20,
               paddingBottom:20,
               paddingLeft:10,
               paddingRight:10
               }}>
            <View>
                <Text>Carbohidratos:</Text>
            </View>
            <View>
                <Text style={{color:'#0B5CFF'}}>{c} g</Text>
            </View>
        </View>

        <View style={{
               display:'flex', 
               justifyContent:'space-between', 
               flexDirection:'row', 
               borderBottomWidth:1, 
               borderBlockColor:'#D9D9D9',
               paddingTop:20,
               paddingBottom:20,
               paddingLeft:10,
               paddingRight:10
               }}>
            <View>
                <Text>Grasas:</Text>
            </View>
            <View>
                <Text style={{color:'#0B5CFF'}}>{g} g</Text>
            </View>
        </View>

        <View style={{
               display:'flex', 
               justifyContent:'space-between', 
               flexDirection:'row', 
               borderBottomWidth:1,
               borderBlockColor:'#D9D9D9',
               paddingTop:20,
               paddingBottom:20,
               paddingLeft:10,
               paddingRight:10
               }}>
            <View>
                <Text>Calorias:</Text>
            </View>
            <View>
                <Text style={{color:'#0B5CFF'}}>{calorias} Kcal</Text>
            </View>
        </View>

        <View style={{
               display:'flex', 
               justifyContent:'space-between', 
               flexDirection:'row', 
               borderBottomWidth:1, 
               borderBlockColor:'#ffff',
               paddingTop:20,
               paddingBottom:20,
               paddingLeft:10,
               paddingRight:10
               }}>
            <View>
                <Text>¿Es un alimento procesado?:</Text>
            </View>
            <View>
                <Text style={{color:'#0B5CFF'}}>No</Text>
            </View>
        </View>
      </View>
    );
  };
  


const AddAlimento = () => {
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
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={styles.checkButton}
          onPress={() => {
            // Aquí puedes colocar la lógica para manejar el evento de presionar el botón de check
          }}
        >
          <MaterialIcons name="check" size={24} color="#fff" />
        </TouchableOpacity>
      ),
      tabBarVisible: false, // Oculta la barra de pestañas
    });

  }, [navigation]);

  return (
    <View style={{flex:1, backgroundColor:'#fff'}}>
      <Item titulo="Pechuga de pollo" cantidad="100" p="103" c="234" g="47" calorias="2450" />
    </View>
  );
};

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 10,
  },
  checkButton: {
    marginRight: 10,
  },
  item:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1, // Corrección aquí
    borderColor: '#EAE8E8', // Asumiendo que el color del borde debe ser negro, puedes cambiarlo según sea necesario
  },
  valor: {
    color: '#0B5CFF',
  },
  itemValores: {
    display: 'flex',
    flexDirection:'row',
    gap:30,
    paddingLeft:10,
    paddingRight:10,
    paddingTop:30,
    paddingBottom:10,
    justifyContent: 'center',
  },
  itemD: {
    display: 'flex',
    alignItems: 'center',
  }
});

export default AddAlimento;
