import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import colors from "../theme/colors";
import { Ionicons } from '@expo/vector-icons';

const ItemRecipe = ({item}) => {
    console.log('props:', item);
    return (
        <TouchableOpacity 
        onPress={() => {}}
         style={styles.container}
         >
            <Image
            source= {{ uri: item.image }}
            resizeMode="cover"
            style={styles.image}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.nameContainer}>{item.name}</Text>
                <View style={styles.ratingContainer}>
                    <Ionicons name="star" size={24} color={colors.start} />
                    <Text style={styles.rating}>{item.rating}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderBottomWidth: 1,
        flexDirection: "row",
        borderColor: colors.border,
    },
    image: {
        backgroundColor: colors.background,
        width: 78,
        height: 78,
        borderRadius: 8,
        marginEnd: 16,
    },
    infoContainer: {
        marginLeft: 16,
        flex: 1,
        marginTop: 8,
    },
    nameContainer: {
        fontSize: 20,
        color: colors.text,
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    rating: {
        fontSize: 16,
        color: colors.primary,
        marginLeft: 8,
    }
});

export default ItemRecipe;