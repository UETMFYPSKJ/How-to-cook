import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { categories } from './Constant'
import COLORS from './Colors'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function CategoriesFilter() {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
            categories.map((category, index)=>{

              return <View style={{
                backgroundColor: index===0 ? COLORS.primary: COLORS.white,
                 marginRight:22,
                  borderRadius:8,
                  paddingHorizontal:16, 
                  paddingVertical:10,
                  marginVertical:14,
                  marginLeft:15,


                  shadowColor:COLORS.black,
                  shadowOffset:{width:0, height:4},
                  shadowOpacity:0.1,
                  shadowRadius:7,
                  elevation:3

                  }} key={index}>
                  
                <Text style={{color:index===0 && COLORS.white, fontSize:16}}>{category.category}</Text>
              </View>
            })
        }
      </ScrollView>
    </View>
  )
}