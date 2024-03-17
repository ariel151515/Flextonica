import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import Color from '../components/Color.js';

const Layout = ({children}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Color.gris_base} />
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop:'7%', // Espacio para la barra de navegación
    backgroundColor: Color.gris_base
  },
});

export default Layout