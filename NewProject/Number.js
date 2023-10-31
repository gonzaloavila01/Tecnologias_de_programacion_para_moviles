import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text } from "react-native";

export const Button = ({text, rol, onPress}) =>{
    return (
        <TouchableOpacity style={[styles.container, rol === 'number' ? styles.numberContainer : styles.operatorcontainer ]} onPress={()=>onPress(text)}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 95,
        height: 95,
        backgroundColor: 'blue',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },
    numberContainer:{
        backgroundColor: '#333333',
    },
    operatorcontainer:{
        backgroundColor: '#ff9f0a',
    },
    text:{
        color: 'white',
        fontSize: 30,
    }
})