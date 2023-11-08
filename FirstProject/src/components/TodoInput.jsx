import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { THEME } from "../theme/colors";

export const TodoInput = ({value, onChangeText}) =>{
    return(
        <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder="Add your taks"
            placeholderTextColor={THEME.COLORS.BLUE.LABELS}
            cursorColor={'white'}
            style={styles.container}/>
    )
}

const styles = StyleSheet.create({
    container: {
        height:50,
        borderWidth: 1, 
        borderRadius: 5,
        width: '70%',
        alignItems: 'center',
        borderColor: 'white',
        paddingHorizontal: 10,
        color: 'white',
    },
})