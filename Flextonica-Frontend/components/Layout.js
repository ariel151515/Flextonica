import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'

const Layout = ({children}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="auto"/>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1, // asi toma todo el alto de la app
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default Layout