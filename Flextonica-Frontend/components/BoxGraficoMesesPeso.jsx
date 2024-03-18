import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions, ScrollView, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { LineChart } from 'react-native-chart-kit';
import { BarChart } from 'react-native-chart-kit';

const BoxGraficoMesesPeso = ({text}) => {
  return (
    <View style={{
      display: 'flex',
      backgroundColor: '#fff',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10
    }}> 
    
    <Text style={styles.header}>{text}</Text>

    <BarChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [56, 55.5, 55, 57, 59, 61],
            },
          ],
        }}
        width={Dimensions.get('window').width - 16}
        height={220}
        yAxisLabel={'Kg '}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    backButton: {
      marginLeft: 15,
    },
    header:{
        textAlign:'left',
        marginRight:'78%',
        marginTop:10,
        marginBottom:10,
        color:'#A0A0A0'
    }
  });

export default BoxGraficoMesesPeso