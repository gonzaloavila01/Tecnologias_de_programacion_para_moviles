import React, {useEffect, useState} from 'react';
import { ActivityIndicator } from 'react-native';
import {Alert, Modal, StyleSheet, Text, Pressable, View, Switch} from 'react-native';

const HomeScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isFetching, setIsFetching] = useState(false);

  const delay = ms => new Promise(res => setTimeout(res, ms));

  useEffect (() => {
    const fetchData = async () =>{
        try {
            const res = await fetch('https://rickandmortyapi.com/api/character')
            const data = await res.json()
            await delay(5000);
        } catch(error){
            console.error(error)
        }finally{
            setIsFetching(false)
        }
    }
  })
  return (
    <View style={styles.container}>
    <Switch
      trackColor={{false: '#767577', true: '#81b0ff'}}
      thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    //   style={{transform: [{scaleX: 5}, {scaleY: 5}]}}
    />
     {isFetching ? <View>
          <ActivityIndicator />
          <ActivityIndicator size="large" />
          <ActivityIndicator size="small" color="#0000ff" />
          <ActivityIndicator size="large" color="#00ff00" />
        </View> : <Text>Ya cargó!</Text>}
  </View>
  );
};

const styles = StyleSheet.create({
 
});

export default HomeScreen;