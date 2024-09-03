import React from 'react';

import RecipeListScreen from './RecipeListScreen';
import ScanRecipeScreen from './ScanRecipeScreen';
import SavedRecipesScreen from './SavedRecipesScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="List" component={RecipeListScreen} options={{
                title: 'Recipes',
                tabBarLabel: 'Recipes',
                tabBarActiveTintColor: 'antiquewhite',
                tabBarActiveBackgroundColor:'cadetblue',
                tabBarIcon: ({ color, size, focused }) => (
                    <Ionicons 
                    name={focused ? 'fast-food-sharp' : 'fast-food-outline'}
                    size={size} 
                    color={color} 
                    />
                )
            }} />
            <Tab.Screen name="Scan"  component={ScanRecipeScreen} options={{
                title: 'Scan',
                tabBarLabel: 'Scan',
                tabBarActiveTintColor: 'antiquewhite',
                tabBarActiveBackgroundColor:'cadetblue',
                tabBarIcon: ({ color, size, focused }) => (
                    <Ionicons 
                    name={focused ? 'scan-circle-sharp' : 'scan-circle-outline'}
                    size={size} 
                    color={color} 
                    />
                )
            }}/>
            <Tab.Screen name="Saved" component={SavedRecipesScreen} options={{
                title: 'Saved',
                tabBarLabel: 'Saved',
                tabBarActiveTintColor: 'antiquewhite',
                tabBarActiveBackgroundColor:'cadetblue',
                tabBarIcon: ({ color, size, focused }) => (
                    <Ionicons 
                    name={focused ? 'basket-sharp' : 'basket-outline'}
                    size={size} 
                    color={color} 
                    />
                )
            }}/>
        </Tab.Navigator>
    );

};

export default MainScreen;