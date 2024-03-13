import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


export const Item = ({dia}) => {
    return (
        <View style={styles.container}>
            <View><Text style={styles.textDia}>{dia}</Text></View>
            <View><Text style={styles.text}>2345</Text></View>
            <View><Text style={styles.text}>123</Text></View>
            <View><Text style={styles.text}>345</Text></View>
            <View><Text style={styles.text}>56</Text></View>
        </View>
    )
}

export const ItemUltimo = ({dia}) => {
    return (
        <View style={styles.containerBoxUltimo}>
            <View><Text style={styles.textDia}>{dia}</Text></View>
            <View><Text style={styles.text}>2345</Text></View>
            <View><Text style={styles.text}>123</Text></View>
            <View><Text style={styles.text}>345</Text></View>
            <View><Text style={styles.text}>56</Text></View>
        </View>
    )
}


const ContenedorMacrosSemanal = () => {
  return (
    <View style={styles.containerBox}>
       <Item dia="Lun 13"/>
       <View style={{ backgroundColor: '#D9DBDD', height:0.7 }}></View>
       <Item dia="Mar 13"/>
       <View style={{ backgroundColor: '#D9DBDD', height:0.7 }}></View>
       <Item dia="Mie 13"/>
       <View style={{ backgroundColor: '#D9DBDD', height:0.7 }}></View>
       <Item dia="Jue 13"/>
       <View style={{ backgroundColor: '#D9DBDD', height:0.7 }}></View>
       <Item dia="Vie 13"/>
       <View style={{ backgroundColor: '#D9DBDD', height:0.7 }}></View>
       <Item dia="Sab 13"/>
       <View style={{ backgroundColor: '#D9DBDD', height:0.7 }}></View>
       <ItemUltimo dia="Do  13"/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingTop: 15,
        paddingBottom: 15,
        //borderBottomWidth: 0.5,
        //borderBottompColor: '#ccc',
        paddingLeft: 10,
        paddingRight: 17,
     },
     containerBoxUltimo: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingTop:15,
        paddingBottom:15,
        paddingLeft: 10,
        paddingRight: 14,
     },
     containerBox: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop:10,
        marginBottom:10,
     },
     text:{
        marginLeft:0,
        color: '#0C4FD4'
     },
     textDia:{
        marginLeft:0,
        color: '#000'
     }
});

export default ContenedorMacrosSemanal