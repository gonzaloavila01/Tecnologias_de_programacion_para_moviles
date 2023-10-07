import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Feather } from '@expo/vector-icons';
import { THEME } from '../../theme/colors';

export default function BalanceHeader() {
  const { themes, toggleTheme } = useContext(AppContext);

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row',
      width: 500,
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
    }
  });

  return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
            <Ionicons name="arrow-back" size={24} color={themes.TEXT1} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', gap: 5}}>
        <TouchableOpacity style={styles.button} onPress={toggleTheme}>
            <Feather name={themes === THEME.MODES.DARK ? 'sun' : 'moon' } size={24} color={themes.TEXT1}  />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
              <Ionicons name="apps-outline" size={24} color={themes.TEXT1}/>
          </TouchableOpacity>
        </View>
      </View>
  );
}

