import React from 'react'
import { StyleSheet, View, Text} from 'react-native'
import { Icons } from './Icons'
import { THEME } from '../theme/colors'

const themes = THEME.MODES.DARK

export const Header = () => {
  return (
    <View style={styles.container}>
        <Icons iconName='left' iconType='AntDesign' />
        <Text style={{color: themes.WHITE, fontSize: 24}}>Send</Text>
        <Icons iconName='message1' iconType='AntDesign' />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: themes.BLACK,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: '100%'
    }
})