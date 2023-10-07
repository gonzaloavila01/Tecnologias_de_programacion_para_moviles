import React, { useContext } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Header } from '../components/Main/Header';
import { Numbers } from '../components/Main/Numbers';
import { AppContext } from '../context/AppContext';

export const MainScreen = () => {
  const { themes } = useContext(AppContext);

  const styles =  StyleSheet.create({
    container:{
        backgroundColor: themes.BACKGROUND,
        flex: 1,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    price:{
        flexDirection: 'row'
    },
    text:{
      color: themes.TEXT1,
    },
    profile:{
        borderRadius: 100,
        width: 70,
        height: 70,
    },
    sendButton: {
        backgroundColor: themes.SECOND,
        borderRadius: 30,
        paddingVertical: 15,
        width: '80%',
        alignItems: 'center',
        marginTop: 10
    },
   
});

  return (
    <View style={styles.container}>
      <Header />
      <View style={{ alignItems: 'center' }}>
        <Image source={require('../../assets/memoji.png')} style={styles.profile} />
        <Text style={[styles.text, { fontSize: 20 }]}>Benjamin Parker</Text>
        <Text style={[styles.text, { fontSize: 12, color: themes.GRAYNUMBERS }]}>**** 3294</Text>
      </View>
      <View style={styles.price}>
        <Text style={[styles.text, { fontSize: 60, fontWeight: '600', paddingVertical: 20 }]}>$340</Text>
        <Text style={{ color: themes.GRAYNUMBERS, fontSize: 60, fontWeight: '600', paddingVertical: 20 }}>.00</Text>
      </View>
      <View style={{ alignItems: 'center', width: '100%', gap: 10, paddingBottom: 30 }}>
        <Numbers />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={{ color: themes.BACKGROUND, fontWeight: '800', fontSize: 20 }}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

