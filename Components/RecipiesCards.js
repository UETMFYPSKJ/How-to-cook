import { View, Text, FlatList, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { recipeList } from './Constant'
import COLORS from './Colors'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function RecipiesCards() {
    const navigation = useNavigation();
    
  return (
      <FlatList 
        data={recipeList} 
        renderItem={({item}) => (

          <Pressable  onPress={()=>navigation.navigate("RecipieDetailsScreen", {item:item})}
          key={item.id}

           style={{
            backgroundColor: COLORS.white,
            borderRadius: 16,
            marginVertical: 16,
            alignItems: 'center',
            marginHorizontal: 15,
            paddingHorizontal: 13,
            paddingVertical: 26,

            shadowColor: COLORS.black,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 7,
            elevation: 3
          }}>
            <Image source={item.image} style={{ width: 150, height: 150, resizeMode: 'center' }} />
            <Text>{item.name}</Text>

            <View style={{ flexDirection: 'row', marginTop: 6 }}>
              <Text>{item.time}</Text>
              <Text> | </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ marginRight: 5 }}>{item.rating}</Text>
                <FontAwesome name="star" size={16} color={COLORS.primary} />
              </View>
            </View>
          </Pressable>
        )} 
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
  )
}
