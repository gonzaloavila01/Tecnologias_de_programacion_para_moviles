import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";


const CustomButton = ({text, onPress, light}) => {
    return(
        <TouchableOpacity style={[styles.container, light && styles.whiteButton]} onPress={onPress}>
            <Text style={{color: light ? 'white' : 'black', }}>{text}</Text>
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
        backgroundColor: '#2A6355'
    },
    whiteButton:{
        color: 'white',
        borderColor: 'white'
    }

})


export default CustomButton