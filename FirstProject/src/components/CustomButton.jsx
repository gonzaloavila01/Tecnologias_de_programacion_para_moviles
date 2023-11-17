import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { Feather } from '@expo/vector-icons'; //edit trash-2 plus


export const CustomButton = ({text, onPress, light, color, iconName}) =>{
    return(
    <TouchableOpacity style={[styles.container, color&&{borderColor: color} ]} onPress={onPress}>
          <Text style={[light && styles.whiteButtonText, color&&{color: color}] }>{text}</Text>
          <Feather name={iconName} size={22} style={[light && styles.whiteButtonText, color&&{color: color} ]} />
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 1, 
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 9,
        paddingVertical: 7,
        borderColor: 'white',
    },
    whiteButtonText:{
        color: 'white',
    }
})