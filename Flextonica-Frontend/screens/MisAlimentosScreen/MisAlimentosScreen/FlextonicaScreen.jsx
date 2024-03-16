import { View, Text } from 'react-native'
import React from 'react'
import SearchAlimentos from '../../../components/SearchAlimentos'

const MisAlimentosTabs = () => {
  return (
    <View style={{flex:1, backgroundColor:'#fff', padding:10}}>
      <SearchAlimentos />
    </View>
  )
}

export default MisAlimentosTabs