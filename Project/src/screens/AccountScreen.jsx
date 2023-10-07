import {Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Constants from 'expo-constants';
import 'react-native-gesture-handler';
import { useAuthContext } from '../hooks/useAuthContext';


import { useNavigation } from '@react-navigation/native';

export default function AccountScreen({route}) {
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
    <View>
      <View style={styles.container}> 
        <Text>Account!</Text>
        <TouchableOpacity onPress={() => navigate('Details')} style={styles.button}>
            <Text>Ir a Detalles</Text>
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
    paddingTop: Constants.statusBarHeight+10,
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