import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CustomHeader from '../../components/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import { ContextoUser } from '../../context/contextoUser';

export const Item = ({ clave, valor }) => {
    return (
        <View style={styles.item}>
            <View><Text>{clave}</Text></View>
            <View><Text style={styles.valor}>{valor}</Text></View>
        </View>
    );
}

const PerfilUserScreen = () => {
    const { getUserData } = useContext(ContextoUser);
    const userData = getUserData();
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
                    onPress={() => navigation.goBack()}
                >
                    <MaterialIcons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <CustomHeader />
            <View style={styles.contenedorItem}>
                <Item clave="Nombre" valor={!userData.displayName ? 'Nombre no especificado' : userData.displayName} />
                <Item clave="Email" valor={userData.email} />
                <Item clave="Sucripcion" valor="Estandar"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    backButton: {
        marginLeft: 15,
    },
    item:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 0.6,
        borderBottomColor: '#EAEBEC',
    },
    valor:{
        color: '#0B5CFF',
    },
    contenedorItem:{
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#Ffff',
    }
});

export default PerfilUserScreen;
