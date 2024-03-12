import React from 'react';
import { View, Text, StyleSheet, Platform  } from 'react-native';

export const BoxDiarioItems = ({ texto, kcal, ch, gs, pr, box }) => {
  return (
    <View style={styles.item}>

      <View>
        <Text>
            <Text style={box === 'diario' && styles.tituloBlanco}>
              {texto}
            </Text>
        </Text>
      </View>

      <View style={styles.itemNum}>
        <View style={styles.itemNumUn}>
          <Text style={texto === 'Totales' ? styles.negrita : null }>
            <Text style={box === 'diario' && styles.tituloBlanco}>
               {kcal}
            </Text>
          </Text>
        </View>

        <View style={styles.itemNumDos}>
            <Text style={texto === 'Totales' ? styles.negrita : null}>
                <Text style={box === 'diario' && styles.tituloBlanco}>
                    {ch}
                </Text>
            </Text>
        </View>

        <View style={styles.itemNumTres}>
            <Text style={texto === 'Totales' ? styles.negrita : null}>
            <Text style={box === 'diario' && styles.tituloBlanco}>
                    {gs}
                </Text>
            </Text>
        </View>

        <View style={styles.itemNumCuatro}>
            <Text style={texto === 'Totales' ? styles.negrita : null}>
                <Text style={box === 'diario' && styles.tituloBlanco}>
                    {pr}
                </Text>
            </Text>
        </View>

      </View>
    </View>
  );
};

const BoxDiario = () => {
  return (
    <View style={styles.contenedor}>
      <View style={styles.barraAzul}>
        <BoxDiarioItems texto="DIARIO" kcal="KCAL" ch="CH" gs="GS" pr="PR" box="diario"/>
      </View>

      <BoxDiarioItems texto="Objetivos" kcal="1600" ch="140" gs="36" pr="180" />
      <BoxDiarioItems texto="Totales" kcal="1168" ch="162" gs="29" pr="67" />
      <BoxDiarioItems texto="Restantes" kcal="432" ch="22" gs="7" pr="113" />

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
    color: '#ffff'
  },
  boxKcal: {},
  boxCh: {},
  boxGs: {},
  boxPr: {},
  textoBlanco: {
    color: '#FFF',
    fontSize: 14,
  },
  textoBlancoDiario: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  contenedorMacros: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
    padding: 12,
    marginRight: 15,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  itemNum: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '75%',
    padding: 2,
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
  boxDiariott: {
    paddingLeft: 15,
  },
  blanco:{
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  tituloBlanco: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default BoxDiario;
