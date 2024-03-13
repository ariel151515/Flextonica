import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

export const BoxItems = ({ texto, Kcal, ch, gs, pr, box }) => {
  const styles = StyleSheet.create({
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      //borderBottomWidth: 0.5,
      //borderBottomColor: '#ccc',
    },
    boxAzul: {
      backgroundColor: texto === 'Totals' || texto === 'Rest' || texto === 'Goals' ? '#ffffff' : '#0C4FD4',
      width: '20%',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 10,
      paddingRight: 10,
    },
    itemNum: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '75%',
      padding: 2
    },
    itemNumUn: {
      width: '15%',
      alignItems: 'center',
    },
    itemNumDos: {
      width: '15%',
      alignItems: 'center',
    },
    itemNumTres: {
      width: '15%',
      alignItems: 'center',
    },
    itemNumCuatro: {
      width: '15%',
      alignItems: 'center',
    },
    negrita: {
      fontWeight: 'bold',
    },
    tituloBlanco: {
      color: '#FFF',
      fontWeight: 'bold',
    },
    text: {
      color: '#FFF',
      fontWeight: 'bold',
    }
  });

  return (
    <View style={styles.item}>
      <View style={styles.boxAzul}>
        <Text style={box === 'diario' && styles.tituloBlanco }>
          {texto}
        </Text>
      </View>

      <View style={styles.itemNum}>
        <View style={styles.itemNumUn}>
          
          {box === 'diario' ? <Text style={styles.text}>{Kcal}</Text> :  <Text style={texto === 'Totals'  ? styles.negrita : null}>{Kcal}
          </Text>}
      
          
        </View>

        <View style={styles.itemNumDos}>
        {box === 'diario' ? <Text style={styles.text}>{ch}</Text> :  <Text style={texto === 'Totals'  ? styles.negrita : null}>{ch}
          </Text>}
        </View>

        <View style={styles.itemNumTres}>
        {box === 'diario' ? <Text style={styles.text}>{gs}</Text> :  <Text style={texto === 'Totals'  ? styles.negrita : null}>{gs}
          </Text>}
        </View>

        <View style={styles.itemNumCuatro}>
        {box === 'diario' ? <Text style={styles.text}>{pr}</Text> :  <Text style={texto === 'Totals'  ? styles.negrita : null}>{pr}
          </Text>}
        </View>
      </View>
    </View>
  );
};

const Box = ({titulo}) => {
  return (
    <View style={styles.contenedor}>
      <View style={styles.barraAzul}>
        <BoxItems
          texto={titulo}
          Kcal="KCAL"
          ch="CH"
          gs="GS"
          pr="PR"
          box="diario"
        />
      </View>

      <BoxItems texto="Goals" Kcal="1600" ch="140" gs="36" pr="180" />
      <BoxItems texto="Totals" Kcal="1168" ch="162" gs="29" pr="67" />
      <BoxItems texto="Rest" Kcal="432" ch="22" gs="7" pr="113" />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#FFF',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    width: '100%',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.16)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  barraAzul: {
    backgroundColor: '#0B5CFF',
    color: '#ffff',
  }
});

export default Box;
