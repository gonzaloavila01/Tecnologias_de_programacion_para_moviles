import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { THEME } from '../theme/colors'

const themes = THEME.MODES.DARK

export const ButtonNumber = ({number}) => {
  return (
    <TouchableOpacity style={styles.container}>
        <Text style={{fontSize: 30, color: themes.WHITE}}>{number}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: themes.GRAYBUTTON,
        paddingVertical: 25,
        paddingHorizontal: 50,
        borderRadius: 30
    },
})