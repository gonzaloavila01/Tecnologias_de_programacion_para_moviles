import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export default function CustomBigButton({text, icon}) {
  const { themes } = useContext(AppContext);
  
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 85,
      width: 110,
      borderRadius: 30,
      backgroundColor: themes.FIRST
  
    },
  });

  return (
    <TouchableOpacity style={styles.container}>
        <MaterialCommunityIcons name={icon} size={24} color={themes.TEXT1} />
        <Text style={{color:  themes.SECOND }}>{text}</Text>
    </TouchableOpacity>
  );
}

