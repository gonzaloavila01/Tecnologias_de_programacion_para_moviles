import React, { useContext } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { THEME } from '../../theme/colors';
import { Feather } from '@expo/vector-icons';
import { AppContext } from '../../context/AppContext';


export const MyCardsHeader = () => {

  const { themes, toggleTheme } = useContext(AppContext);

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row',
      width: 400,
      marginTop: 30
    },
    button: {
      borderWidth: 1,
      borderColor: themes.FIRST,
      width: 50, 
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15
    },
  });

  return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
            <Image  style={styles.button} source={require('../../../assets/memoji.png')}/>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', gap: 5}}>
          <TouchableOpacity style={styles.button} onPress={toggleTheme}>
              <Feather name={themes === THEME.MODES.DARK ? 'sun' : 'moon' } size={24} color={themes.TEXT1}  />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
              <Ionicons name="chatbubbles" size={24} color={themes.TEXT1} />
          </TouchableOpacity>
        </View>
      </View>
  );
}


