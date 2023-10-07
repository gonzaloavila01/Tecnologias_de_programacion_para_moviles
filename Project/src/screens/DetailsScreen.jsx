import {Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Constants from 'expo-constants';
import 'react-native-gesture-handler';


import { useNavigation } from '@react-navigation/native';
import { useAuthContext } from '../hooks/useAuthContext';

export default function DetailsScreen({ route}) {
  const navigation = useNavigation()
  const {navigate} = useNavigation()

  const {handleLogout: onLogout} = useAuthContext()

  const handleLogout = () =>{
    try {
        onLogout()
        navigate('Login')
        console.log("SE CERRÓ LA SESIÓN")
    } catch (error) {
        console.error(error)
    }
}


  return (
    <View style={{paddingTop: Constants.statusBarHeight,}}>
      <View style={styles.container}> 
        <Text>Details!</Text>
        <TouchableOpacity onPress={() => navigate('Account')} style={styles.button}>
            <Text>Ir a mi cuenta</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogout} style={styles.button}>
            <Text>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 15
  }
});