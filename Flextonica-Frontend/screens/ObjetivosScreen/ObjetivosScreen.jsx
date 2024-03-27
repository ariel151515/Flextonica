import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, TouchableWithoutFeedback} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; // Asegúrate de importar MaterialIcons de acuerdo a tu configuración


export const CustomModal = ({ modalVisible, setModalVisible }) => {

  const styles = StyleSheet.create({
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)' // Fondo oscuro transparente
    },
    modalContent: {
      position: 'absolute',
      top: '45%', // Centra verticalmente
      left: '24%', // Desplaza hacia la derecha
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#ccc'
    }
  });

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={styles.modalOverlay} />
      </TouchableWithoutFeedback>
      
      <View style={styles.modalContent}>
        {/* Contenido del modal */}
        <Text>Contenido del modal aquí</Text>
      </View>
    </Modal>
  );
}



const ObjetivosScreen = () => {
  const navigation = useNavigation(); // Mueve la declaración de useNavigation aquí
  const [ pesoInicial, setPesoInicial] = useState('60');
  const [modalVisible, setModalVisible] = useState(false);
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#fff',
      headerLeftContainerStyle: {
        paddingLeft: 10, // Ajusta según sea necesario
      },
      headerLeft: () => (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()} // Utilizamos navigation.goBack() para regresar a la pantalla anterior
        >
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      ),
        headerShown: true,
        headerTitle: true
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.item}>
         <Text>Peso inicial</Text>
         <TouchableOpacity onPress={() => setModalVisible(true)}>
             <Text style={{color:'#6809EE'}}>{pesoInicial}</Text>
         </TouchableOpacity>
      </View>

      <View style={styles.item}>
         <Text>Nivel de actividad</Text>
         <Text style={{color:'#6809EE'}}>Muy activo</Text>
      </View>

      <View style={styles.item}>
         <Text>Edad</Text>
         <Text>35</Text>
      </View>

      <View style={styles.item}>
         <Text style={{fontWeight:'bold'}}>TMB</Text>
         <Text style={{fontWeight:'bold'}}>1345</Text>
      </View>

      <View style={styles.item}>
         <Text>Deficit calorico</Text>
         <Text style={{color:'#6809EE'}}>30 %</Text>
      </View>

      <View style={styles.item}>
         <Text>Proteinas</Text>
         <Text style={{color:'#6809EE'}}>25 %</Text>
      </View>

      <View style={styles.item}>
         <Text>Carbohidratos</Text>
         <Text style={{color:'#6809EE'}}>25 %</Text>
      </View>

      <View style={styles.item}>
         <Text>Grasas</Text>
         <Text style={{color:'#6809EE'}}>25 %</Text>
      </View>

      <View style={styles.item}>
         <Text style={{fontWeight:'bold'}}>Calorias a consumir</Text>
         <Text style={{fontWeight:'bold'}}>1657 Kcal</Text>
      </View>

      <View style={styles.item}>
         <Text>Margen</Text>
         <Text style={{color:'#6809EE'}}>60 kg</Text>
      </View>

       {/* Agrega el componente modal */}
       <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
   </View>
  )
}


// Estilos
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ffff',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 0.6,
    borderBottomColor: '#EAEBEC',
    backgroundColor:'#fff',
    borderBottomWidth:1,
    borderBottomColor:'#EAEBEC'
  }
});

export default ObjetivosScreen;
