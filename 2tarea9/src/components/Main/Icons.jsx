import React, {useContext} from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { AppContext } from '../../context/AppContext';


export const Icons = ({iconName, iconType, onPress}) => {
    const { themes } = useContext(AppContext);

    const styles = StyleSheet.create({
        container:{
            borderRadius: 5,
            borderWidth: 2,
            borderColor: themes.FIRST,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
        }
    });

    const setIcon = (iconType, iconName) =>{
        if(iconType==='AntDesign') return(<AntDesign name={iconName} size={20} color={themes.TEXT1} />) 
    }
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        {setIcon(iconType, iconName)}
    </TouchableOpacity>
  )
}


