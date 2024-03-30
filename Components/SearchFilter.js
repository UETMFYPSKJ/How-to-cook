import { View, Text, TextInput } from 'react-native'
import React from 'react'
import COLORS from './Colors'
import { FontAwesome } from '@expo/vector-icons';


export default function SearchFilter({Searchicon,PlaceHolder}) {
  return (
    <View 
    style={{
          backgroundColor:COLORS.white,
          flexDirection:'row',
          paddingHorizontal:16, 
          paddingVertical:16, 
          borderRadius:8,
          marginVertical:14,
          marginHorizontal:20,
          

          shadowColor:COLORS.black,
          shadowOffset:{width:0, height:4},
          shadowOpacity:0.1,
          shadowRadius:7,
          elevation:3

          }}>
<FontAwesome name={Searchicon} size={24} color={COLORS.red} />
      <TextInput style={{paddingLeft:8, color:COLORS.grey}}>{PlaceHolder}</TextInput>
    </View>
  )
}