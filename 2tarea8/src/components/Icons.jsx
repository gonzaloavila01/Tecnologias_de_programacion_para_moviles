import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { THEME } from '../theme/colors';

const themes = THEME.MODES.DARK

export const Icons = ({iconName, iconType, onPress}) => {

    const setIcon = (iconType, iconName) =>{
        if(iconType==='AntDesign') return(<AntDesign name={iconName} size={20} color={themes.WHITE} />) //leftcircleo - appstore1
    }
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        {setIcon(iconType, iconName)}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        borderRadius: 5,
        borderWidth: 2,
        borderColor: themes.GRAYBUTTON,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    }
})
