import {StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

import { useAuthContext } from '../hooks/useAuthContext';


export default function LoginScreen({route}) {
  const {handleLogin: onLogin} = useAuthContext()
  const navigation = useNavigation()

  const handleLogin = () => {
    try {
      const loginValue = onLogin(username, password)
      if (loginValue) {
        setPassword('')
        setUsername('')
        return navigation.navigate('Details')
      }

    } catch (error) {
      console.error(error)
    }
  }


  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View>
      <View style={styles.container}> 
        <Text>Login Screen</Text>
        <TextInput
          value={username}
          onChangeText={(value) => setUsername(value)}
          placeholder='Introduce tu usuario'
          style={{
            borderWidth: 1,
            borderRadius: 15,
            padding: 15,
            height: 50, 
            width: '90%',
            margin: 10

          }}
        />
        <TextInput
          value={password}
          onChangeText={(value) => setPassword(value)}
          placeholder='Introduce tu contraseña'
          style={{
            borderWidth: 1,
            borderRadius: 15,
            padding: 15,
            height: 50, 
            width: '90%',
            margin: 10

          }}
          secureTextEntry
        />
        <TouchableOpacity style={{padding: 20, borderWidth: 1}} onPress={handleLogin}>
            <Text>Iniciar sesión</Text>
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
});