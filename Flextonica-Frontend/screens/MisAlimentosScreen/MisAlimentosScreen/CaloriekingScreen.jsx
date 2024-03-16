import { View, Text } from 'react-native'
import React from 'react'

import SearchAlimentos from '../../../components/SearchAlimentos'
import SelectComidas from '../../../components/SelectComidas'

const CaloriekingTabs = () => {
  return (
    <View style={{flex:1, backgroundColor:'#fff', padding:10}}>
       <SearchAlimentos />
       <SelectComidas />
    </View>
  )
}

export default CaloriekingTabs