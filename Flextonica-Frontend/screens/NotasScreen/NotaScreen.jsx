import { View, Text, StyleSheet, TouchableOpacity, Switch, TouchableWithoutFeedback, Modal, ScrollView } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const NotaScreen = () => {

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
          <MaterialIcons name="arrow-back" size={24} color="#fff" style={{marginLeft:15}}/>
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={styles.checkButton}
          onPress={() => {
            // Aquí puedes colocar la lógica para manejar el evento de presionar el botón de check
          }}
        >
          <AntDesign name="edit" size={24} color="#fff" style={{marginRight:15}} />
        </TouchableOpacity>
      ),
      tabBarVisible: false, // Oculta la barra de pestañas
    });

  }, [navigation]);

  return (
    <View style={{flex:1, backgroundColor:'#fff', padding:15}}> 
      <Text style={{lineHeight:20}}>
            Lorem ipsum es el texto que se usa habitualmente
            en diseño gráfico en demostraciones de tipografías o de
            borradores de diseño para probar el diseño visual antes 
            de insertar el texto final
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default NotaScreen