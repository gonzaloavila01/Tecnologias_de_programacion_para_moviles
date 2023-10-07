import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export default function CustomButton({text, isActive}) {
  const { themes } = useContext(AppContext);

  return (
    <TouchableOpacity style={[styles.container, {backgroundColor: isActive ? themes.SECOND : themes.BACKGROUND, borderColor: isActive ? themes.BACKGROUND : themes.SECOND}]}>
        <Text style={{color: isActive ? themes.TEXT2 : themes.TEXT1 }}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 80,
    borderRadius: 30,
    borderWidth: 1
  },
});
