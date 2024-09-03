import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import RecipesData from "../contants/RecipesData.json";
import colors from "../theme/colors";


const RecipeDetailScreen = () => {
    const route = useRoute();
    const { recipeId } = route.params;
    const RecipeDetail = RecipesData.recipes.find((recipe) => Number(recipe.id) === Number(recipeId));
    console.log('id:', RecipeDetail);
    return (
        <ScrollView style={styles.screen}>
            <Image
            source={{uri: RecipeDetail.image}}
            resizeMode="cover"
            style={styles.imageRecipe}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flexGrow: 1, //untuk flex dari scroll view
    },
    imageRecipe: {
        backgroundColor: colors.border,
        height:300,
    }
});

export default RecipeDetailScreen;