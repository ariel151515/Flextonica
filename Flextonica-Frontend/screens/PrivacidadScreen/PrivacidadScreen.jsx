import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';
import CustomHeader from '../../components/CustomHeader';

export const Item = ({ titulo, ultimo}) => {
    return (
        <TouchableWithoutFeedback onLongPress={null}>

            <View style={{
                display: 'flex',
                flexDirection: 'column'
            }}>

              {ultimo ? 
              
              <View style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderBlockColor: '#fff',
                paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 10,
                paddingRight: 10,
                alignItems: 'center'
            }}>
                <View>
                    <Text>{titulo}</Text>
                </View>

            </View>
              
              : 
              
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

            </View>

              }

            </View>
        </TouchableWithoutFeedback>
    );
};


const PrivacidadScreen = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{flex:1, backgroundColor:'#fff'}}>
           <CustomHeader />
           <View style={{ backgroundColor: '#fff' }}>
              <Item titulo="Terminos de servicio" />
              <Item titulo="Politicas de privacidad" />
              <Item titulo="Gestionar los consentimientos para el tratamiento de datos" ultimo="true"/>
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

export default PrivacidadScreen;
