import React , {useContext} from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import { Icons } from './Icons'
import { AppContext } from '../../context/AppContext';
import { THEME } from '../../theme/colors';
import { Feather } from '@expo/vector-icons'; 



export const Header = () => {
  const { themes, toggleTheme } = useContext(AppContext);

  const styles = StyleSheet.create({
    container:{
        backgroundColor: themes.BACKGROUND,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: '100%'
    }
});

  return (
    <View style={styles.container}>
        <Icons iconName='left' iconType='AntDesign' />
        <Text style={{color: themes.TEXT1, fontSize: 24}}>Send</Text>
        <TouchableOpacity style={styles.button} onPress={toggleTheme}>
              <Feather name={themes === THEME.MODES.DARK ? 'sun' : 'moon' } size={24} color={themes.TEXT1}  />
          </TouchableOpacity>
        <Icons iconName='message1' iconType='AntDesign' />
    </View>
  )
}

