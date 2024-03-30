// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../Screens/WelcomeScreen';
import RecipieListScreen from '../Screens/RecipieListScreen';
import RecipieDetailsAScreen from '../Screens/RecipieDetailsScreen';


const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="RecipieListScreen" component={RecipieListScreen} />
        <Stack.Screen name="RecipieDetailsScreen" component={RecipieDetailsAScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;