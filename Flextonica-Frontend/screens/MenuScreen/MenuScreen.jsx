import { View, Text, StyleSheet } from 'react-native';
import React,{ useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';



export const BoxMenuUser = () => {
    return (
        <View style={styles.container}>
            <Text>sadasdad</Text>
        </View>
    );
}

const MenuScreen = () => {
    const navigation = useNavigation(); // Declaración de navigation

    useEffect(() => {
        console.log("Ejecutando useEffect de WeekScreen");
        navigation.setOptions({
            headerShown: false, // Oculta la barra superior
            headerTitle: false // Oculta el título
        });
    }, []);

  return (
    <View style={styles.container}>
        <BoxMenuUser />
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        paddingLeft:10,
        paddingRight:10,
        paddingTop:30,
        paddingBottom:30,
        backgroundColor: '#ccc',
    }
})

export default MenuScreen