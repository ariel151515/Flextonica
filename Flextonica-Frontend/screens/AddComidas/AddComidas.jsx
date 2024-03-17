import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, TouchableWithoutFeedback, Modal } from 'react-native';
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
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 10,
                    paddingRight: 10,
                    alignItems: 'center'
                }}>
                    <View>
                        <Text style={{ color: '#6200EE' }}>{titulo}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 25 }}>
                        <TouchableOpacity onPress={() => {
                            // Aquí puedes colocar la lógica para manejar el evento de eliminar
                        }}>
                            <Switch
                                trackColor={{ false: "#ADADAD", true: "#B17FF7" }}
                                thumbColor={switchValue ? "#6200EE" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={switchValue}
                            />
                        </TouchableOpacity>

                    </View>
                </View>

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={closeModal}
                >
                    <TouchableWithoutFeedback onPress={closeModal}>
                        <View style={styles.modalBackground}>
                            <View style={styles.modalContent}>
                                <View style={styles.deleteContainer}>
                                    <TouchableOpacity
                                        style={styles.deleteButton}
                                        onPress={() => {
                                            // Aquí puedes colocar la lógica para manejar el evento de eliminar
                                            closeModal();
                                        }}
                                    >
                                     <MaterialIcons name="delete-forever" size={24} color="#ccc" />
                                    </TouchableOpacity>

                                    <Text style={styles.modalText}>Eliminar comida</Text>

                                </View>

                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>

            </View>
        </TouchableWithoutFeedback>
    );
};


const AddComidas = () => {
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
                    <FontAwesome6 name="add" size={24} color="#fff" />
                </TouchableOpacity>
            ),
            tabBarVisible: false, // Oculta la barra de pestañas
        });

    }, [navigation]);

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Item titulo="Desayuno" />
            <Item titulo="Merienda" />
            <Item titulo="Cena" />
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

export default AddComidas;
