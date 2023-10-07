import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export default function Transaction({isSend, date, name, value}) {
  const { themes } = useContext(AppContext);
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      gap: 20,
      marginVertical: 2.5
    },
    icon:{
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: themes.FIRST,
      width: 55,
      height: 55,
      borderRadius: 50,
    },
  });

  return (
      <TouchableOpacity style={[styles.container]}>
        <View style={styles.icon}>
            <MaterialCommunityIcons name={isSend ? "email-send-outline" : "email-receive-outline" } size={24} color={themes.SECOND} />
        </View>
        <View style={{gap: 10, marginRight: 10}}>
            <Text style={{color: themes.TEXT2, fontSize:15, fontWeight: 'bold'}}>{name}</Text>
            <Text style={{color: themes.TEXT2, fontSize:12}}>{date}</Text>
        </View>
        <Text style={{color: themes.TEXT2, fontSize:15, fontWeight: 'bold'}}>{value}</Text>
      </TouchableOpacity>
  );
}

