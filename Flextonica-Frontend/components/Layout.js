import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'

const Layout = ({children}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#E0E0E0" />
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
    backgroundColor: '#E0E0E0'
  },
});

export default Layout