import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView,
    Dimensions,
    ScrollView
} from 'react-native';

import { PieChart } from 'react-native-chart-kit';


const GraficoTortaFlexible = ({props}) => {
  return (
    <View style={styles.container}>
        <PieChart
        data={[
          {
            name: '% Saludable',
            population: 70,
            color:'#54C259',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: '% Procesados',
            population: 30,
            color: '#0170BF',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          }
        ]}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute //for the absolute number remove if you want percentage
      />

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems:'center'
    }
})

export default GraficoTortaFlexible