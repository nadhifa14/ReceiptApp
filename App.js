// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainScreen from './src/screens/MainScreen';
import DetailScreen from './src/screens/RecipeDetailScreen';
import colors from './src/theme/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer theme={{
      darkMode: false, //kalo mau dibikin dark mode jadiin true
      colors: {
        background: colors.background,
        border: colors.border,
        card: colors.card,
        text: colors.text,
        notification: colors.notification,
        primary: colors.primary,
      },
    }}>
      <Stack.Navigator>
        <Stack.Screen name="Main" 
        component={MainScreen} 
        options={{
          headerShown: false,
        }} 
        />
        <Stack.Screen name="Detail" 
        component={DetailScreen} 
        options={{
          title: "Recipe Detail",
          headerTransparent: true,
        }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;