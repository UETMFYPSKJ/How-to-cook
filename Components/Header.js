import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import COLORS from './Colors';

export default function Header({HeaderText,HeaderIcon}) {
  return (
    <View style={{flexDirection:'row', marginHorizontal:16, marginTop:10}}>
    <Text style={{flex:1, fontSize:20, fontWeight:'500'}}>{HeaderText}</Text>
    <FontAwesome name={HeaderIcon} size={24} color={COLORS.red} />
        </View>
  )
}