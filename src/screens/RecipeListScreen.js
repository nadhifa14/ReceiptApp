import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import RecipesData from "../contants/RecipesData.json";
import ItemRecipe from "../components/ItemRecipe";

const RecipeListScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.screen}>
            <FlatList
                data={RecipesData.recipes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (<ItemRecipe item={item}/>)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    }

});
export default RecipeListScreen;