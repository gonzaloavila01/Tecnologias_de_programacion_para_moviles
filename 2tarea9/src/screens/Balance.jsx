import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import BalList from '../components/Balance/BalList';
import BalanceHeader from '../components/Balance/BalanceHeader';
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


export const Balance= () => {
  const { themes } = useContext(AppContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: themes.BACKGROUND
    },
    text: {
      color: themes.TEXT1,
      fontSize: 15
    },
    text2: {
      color: 'gray',
      fontSize: 15,
      marginRight: 20
    },
  });

  return (
      <View style={styles.container}>
        <BalanceHeader/>
        <Text style={{color: 'gray', fontSize: 20}}>Total Balance</Text>
        <Text style={{color: themes.TEXT1, fontSize: 40}}>$32,751.75</Text>
        <View style={{flexDirection: 'row', gap: 30}}>
          <Text style={styles.text}>Day</Text>
          <Text style={styles.text}>Week</Text>
          <Text style={[styles.text, {color: themes.SECOND}]}>Month</Text>
          <Text style={styles.text}>Year</Text>
        </View>
        <Image source={require('../../assets/grafica.png')}/>
        <ScrollView horizontal={true} style={{paddingHorizontal: 20}}>
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((texto, index) => (
            <Text key={index} style={styles.text2}>
              {texto}
            </Text>
          ))}
        </ScrollView>
        <BalList/>
      </View>
  );
}

