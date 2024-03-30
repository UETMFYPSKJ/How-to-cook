import { View, Text, Image, SafeAreaView, Pressable, ScrollView } from 'react-native'
import React from 'react'
import COLORS from '../Components/Colors'
import { FontAwesome } from '@expo/vector-icons'
import { recipeList } from '../Components/Constant'

export default function RecipieDetailsAScreen({navigation, route}) {
  const{item}=route.params;
  
  return (
    
    < View style={{backgroundColor:item.color, flex:1}}>
     
     <SafeAreaView style={{flexDirection:'row', marginHorizontal:16, marginTop:30}}> 

<Pressable style={{flex:1}}
           onPress={()=>navigation.goBack()}>
           <FontAwesome name="arrow-circle-left" size={24} color="white"/>
</Pressable>

     <FontAwesome name="heart-o" size={24} color="white" />
     </SafeAreaView>
      
      <View style={{
        backgroundColor:COLORS.white, 
        marginTop:240, 
        flex:1, 
        borderTopLeftRadius:56,
        borderTopEndRadius:56,
        alignItems:'center',
        paddingHorizontal:16}}>

        <View style={{flex:1, width:300, height:300, position:'absolute', top:-150}}>
      <Image 
      source={item.image}
      style={{width:"100%", height:"100%", resizeMode:'contain'}}/>
        </View>
        {/*Recipie name*/}
       <Text style={{ marginTop:145, fontSize:28, fontWeight:'bold'}}>{item.name}</Text>
       
       <ScrollView showsVerticalScrollIndicator={false}>
        {/*Recipie Description*/}
        <Text style={{marginTop:12, fontSize:17,}}>{item.description}</Text>

       {/*Recipie Extra Details*/}
       <View style={{flexDirection:'row', justifyContent:'space-between',  marginTop:30}}>
        <View style={{backgroundColor:"rgba(255,0,0,0.38)", width:100, paddingVertical:16, alignItems:'center', borderRadius:8}}>
        <Text style={{fontSize:30}}>⏰</Text>
        <Text style={{fontSize:17, fontWeight:'500'}}>{item.time}</Text>
        </View>

        <View style={{backgroundColor:"rgba(135,206,235,0.8)", width:100, paddingVertical:16 , alignItems:'center', borderRadius:8}}>
        <Text style={{fontSize:30}}>🥣</Text>
        <Text style={{fontSize:17, fontWeight:'500'}}>{item.difficulty}</Text>
        </View>

        <View style={{backgroundColor:"rgba(255,165,0,0.48)", width:100, paddingVertical:16, alignItems:'center', borderRadius:8}}>
        <Text style={{fontSize:30}}>🔥</Text>
        <Text style={{fontSize:17, fontWeight:'500'}}>{item.calories}</Text>
        </View>

       </View>
       
       
        {/*Recipie Ingredients*/}
        <View style={{alignSelf:'flex-start', marginVertical:15}}> 
        <Text style={{fontWeight:'500', fontSize:22, marginBottom:6}}>Ingredients</Text>
        
        {item.ingredients.map((ingredients, index)=>{
          return(
                 <View style={{flexDirection:'row', alignItems:'center', marginVertical:4}} key={index}>
                  <View style={{backgroundColor:COLORS.red, height:10,width:10, borderRadius:5}}></View>
                  <Text style={{fontSize:18, marginLeft:6}}>{ingredients}</Text>
                 </View>);
        }
        )}
        </View>
        {/*Recipie Steps*/}
        <View style={{alignSelf:'flex-start', marginVertical:15}}> 
        <Text style={{fontWeight:'500', fontSize:22, marginBottom:6}}>Steps</Text>
        
        {item.steps.map((step,index)=>{
          return(
            
                  
                  <Text key={index} style={{fontSize:18, marginLeft:6, marginVertical:6}}>{`${index+1}) ${step}`}</Text>
                 );
        }
        )}
        </View>
</ScrollView>
      </View>

      
       
          </View> 
  )
}