import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const CustomButton = ({text, onPress, light, iconName}) => {
    return(
        <TouchableOpacity style={[styles.container, light && styles.whiteButton]} onPress={onPress}>
            <Text style={{color: light ? 'white' : 'black', fontSize:18}}>{text}</Text>
            <FontAwesome name={iconName} size={18} style={[light && styles.whiteButton]} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 5,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0b64c5'
    },
    whiteButton:{
        color: 'white',
        borderColor: 'white'
    }

})


export default CustomButton