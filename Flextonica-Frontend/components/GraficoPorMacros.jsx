import { View } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import React from 'react'

const data = [
  {
    name: 'Proteínas',
    population: 50,
    color: '#FF6B6B',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Carbohidratos',
    population: 25,
    color: '#FFD166',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Grasas',
    population: 25,
    color: '#06D6A0',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];

const GraficoPorMacros = () => {
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    formatLabelText: (value, name) => `${name}: ${(value * 100).toFixed(0)}%`, // Formatea el texto del label
  };

  return (
    <View>
      <PieChart
        data={data}
        width={300}
        height={220}
        chartConfig={chartConfig}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </View>
  );
}

export default GraficoPorMacros;
