import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, TouchableWithoutFeedback, Modal, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

export const Item = ({ titulo }) => {
    const [switchValue, setSwitchValue] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const toggleSwitch = () => {
        setSwitchValue(previousState => !previousState);
    };

    const handleLongPress = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <TouchableWithoutFeedback onLongPress={handleLongPress}>

            <View style={{
                display: 'flex',
                flexDirection: 'column'
            }}>

                <View style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    borderBottomWidth: 1,
                    borderBlockColor: '#D9D9D9',
                    paddingTop: 20,
                    paddingBottom: 20,
                    paddingLeft: 10,
                    paddingRight: 10,
                    alignItems: 'center'
                }}>
                    <View>
                        <Text>{titulo}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => {
                            // Aquí puedes colocar la lógica para manejar el evento de eliminar
                        }}>
                            
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};


const AjustesScreen = () => {
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
        });

    }, [navigation]);

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
           <View style={{ backgroundColor: '#fff', marginTop:10}}>
              <Text style={{ paddingLeft:10, fontWeight:'bold', color:'#9B9999', fontSize:16, paddingTop:25, paddingBottom:5}}>Mi cuenta</Text>
              <Item titulo="Editar perfil" />
              <Item titulo="Objetivos" />
              <Item titulo="Suscripcion Premium" />
              <Item titulo="Cambiar contraseña" />
              <Item titulo="Cerrar sesion" />
           </View>

           <View style={{ backgroundColor: '#fff', marginTop:10}}>
              <Text style={{ paddingLeft:10, fontWeight:'bold', color:'#9B9999', fontSize:16, paddingTop:25, paddingBottom:5}}>Ajustes</Text>
              <Item titulo="Apariencia" />
              <Item titulo="Recordatorio" />
              <Item titulo="Centro de privacidad" />
           </View>

           <View style={{ backgroundColor: '#fff', marginTop:10, marginBottom:20}}>
              <Text style={{ paddingLeft:10, fontWeight:'bold', color:'#9B9999', fontSize:16, paddingTop:25, paddingBottom:5}}>Ayuda</Text>
              <Item titulo="Acerca de nosotros" />
              <Item titulo="Contactar a soporte" />
              <Item titulo="Programa de afiliados" />
           </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    backButton: {
        marginLeft: 10,
    },
    checkButton: {
        marginRight: 10,
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContent: {
        backgroundColor: '#fff',
        padding:'10%',
        borderRadius: 10,
        width: '80%'
    },
    modalText: {
        textAlign: 'center',
        fontSize: 16,
    },
    deleteContainer: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        //borderWidth: 1,
        //borderColor: '#D9D9D9',
        padding: 10,
        borderRadius: 10,
    },
    deleteButton: {
        borderRadius: 5,
        alignSelf: 'center',
        paddingRight:10
    },
    deleteButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default AjustesScreen;
