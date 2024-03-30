import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../Components/Colors'
import RecipieListScreen from './RecipieListScreen'

export default function WelcomeScreen({navigation}) {
  return (
    <View style={{flex:1, alignItems:'center'}}>
      <Image source={require("../assets/welcome1.png")}/>
      <Text style={{color:COLORS.green, fontWeight:'bold', fontSize:18, paddingTop:10}}>30K+ Premium Recipies</Text>
      <Text style={{color:COLORS.dark, fontWeight:'bold', fontSize:35, marginTop:5}}>Cook like a chef</Text>
      <TouchableOpacity
      onPress={()=>navigation.navigate("RecipieListScreen")}
       style={{backgroundColor:COLORS.green, width:"80%", padding:15, alignItems:'center', borderRadius:18, marginTop:65}}>
        <Text style={{textAlign:'center', color:COLORS.light, fontWeight:'bold', fontSize:18}}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  )
}