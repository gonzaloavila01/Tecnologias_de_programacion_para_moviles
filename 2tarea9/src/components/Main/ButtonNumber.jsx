import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AppContext } from '../../context/AppContext';

export const ButtonNumber = ({ number }) => {
  const { themes } = useContext(AppContext);

  const styles = StyleSheet.create({
    container:{
        backgroundColor: themes.FIRST,
        paddingVertical: 25,
        paddingHorizontal: 50,
        borderRadius: 30
    },
});
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={{ fontSize: 30, color: themes.TEXT1 }}>{number}</Text>
    </TouchableOpacity>
  );
}
