import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const CustomButton = ({text, onPress, light, iconName}) => {
    return(
        <TouchableOpacity style={[styles.container, light && styles.whiteButton]} onPress={onPress}>
            <Text style={{color: light ? 'white' : 'black', }}>{text}</Text>
            <FontAwesome name={iconName} size={22} color="white" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 9,
        paddingVertical: 7,
        backgroundColor: '#2A6355'
    },
    whiteButton:{
        color: 'white',
        borderColor: 'white'
    }

})


export default CustomButton