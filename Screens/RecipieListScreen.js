import { View, Text } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchFilter from '../Components/SearchFilter'
import CategoriesFilter from '../Components/CategoriesFilter'
import RecipiesCards from '../Components/RecipiesCards'

export default function RecipieListScreen() {
  return (
    <SafeAreaView style={{flex:1}}>
      {/*Header*/}
      <Header HeaderText={"Hi, Jawad"} HeaderIcon={"bell-o"}/> 

      {/*Search Filter*/}
      <SearchFilter Searchicon={"search"} PlaceHolder={"Enter your favourite recipie"}/>

      {/*Categories Filter*/}
      <View style={{marginTop:20}}>
        <Text style={{fontSize:22, fontWeight:'bold', marginLeft:15}}>Categories</Text>

      {/*Categories List*/}
      <CategoriesFilter/>

      </View>

      {/*Recipies List Filter*/}
      <View style={{marginTop:20}}>
        <Text style={{fontSize:22, fontWeight:'bold', marginLeft:15}}>Resipies</Text>

      {/*Resipies List*/}
      <RecipiesCards/>
      </View>
         </SafeAreaView>
  )
}