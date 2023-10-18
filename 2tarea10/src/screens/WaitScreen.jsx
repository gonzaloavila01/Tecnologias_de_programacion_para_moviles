import {StyleSheet, Text, View } from 'react-native';
import { useAuthContext } from '../hooks/useAuthContext';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native-paper'


export default function WaitScreen() {
    const navigation = useNavigation()
    const delay = (ms) => new Promise((res) => setTimeout(res, ms))
    const { isAuthenticated } = useAuthContext();
    useEffect(() => {
        const pass= async () =>{
            await delay(3000)
            let next = isAuthenticated ? 'Home1' : 'Start'
            navigation.navigate(next)
        }
        pass()
    },[])
  return (
    <View style={styles.container}> 
        <ActivityIndicator size='large' color='#20B0B0'/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});