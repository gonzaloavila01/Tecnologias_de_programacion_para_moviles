import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { StyleSheet, View, Text } from 'react-native';
import CardScroll from '../components/MyCards/CardScroll';
import PersonList from '../components/MyCards/PersonList';
import CustomButton from '../components/MyCards/CustomButton';
import CustomBigButton from '../components/MyCards/CustomBigButton';
import { MyCardsHeader } from '../components/MyCards/MyCardsHeader';


export const MyCards = () =>{
  const { themes } = useContext(AppContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: themes.BACKGROUND
    },
  });

  return (
      <View style={styles.container}>
        <MyCardsHeader/>
        <View style={{alignItems: 'flex-start', width: 300, margin: 5}}>
          <Text style={{fontSize: 30, color: themes.TEXT1}}>My Cards</Text>
        </View>
          <CardScroll/>
          <View style={{flexDirection: 'row' , gap: 5, marginBottom: 10}}>
            <CustomBigButton text={'Send'} icon={"email-send-outline"}/>
            <CustomBigButton text={'Receive'} icon={"email-receive-outline"}/>
            <CustomBigButton text={'Swap'} icon={"swap-horizontal"}/>
          </View>
          <View style={{flexDirection: 'row' , gap: 5}}>
            <CustomButton text={'Activity'}/>
            <CustomButton text={'Contacts'} isActive/>
            <CustomButton text={'Payments'}/>
            <CustomButton text={'Sale'}/>
          </View>
          <PersonList/>
      </View>
  );
}
