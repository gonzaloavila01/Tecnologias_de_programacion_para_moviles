import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuthContext } from '../hooks/useAuthContext';

export default function LoginScreen({ route }) {
    const { handleLogin } = useAuthContext();
    const navigation = useNavigation();
    const {navigate} = useNavigation()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginPress = async () => {
        if (!username || !password) {
            Alert.alert('Campos vacíos', 'Por favor, complete todos los campos');
            return;
        }

        const loginSuccess = await handleLogin(username, password);
        if (loginSuccess) {
          return navigation.navigate('Home1')
        }
          else{
          Alert.alert('Inicio de sesión fallido', 'Verifique los datos y vuelva a intentar');
        }
      }
  
  return (
      <View style={styles.container}> 
        <Image style={styles.image}source={{uri: 'https://static.vecteezy.com/system/resources/previews/008/693/409/original/sticker-set-fast-food-cartoon-vector.jpg'}}/>
        <View style={{width: '80%'}}>
          <Text style={{fontWeight: 'bold', fontSize: 30, color: '#20B0B0'}}>Welcome!</Text>
        </View>
        <View style={{width: '80%'}}>
          <Text style={{fontWeight: 'bold'}}>User</Text>
          <TextInput
            value={username}
            onChangeText={(value) => setUsername(value)}
            placeholder='Enter your user'
            style={styles.input}
          />
        </View>
        <View style={{width: '80%'}}>
          <Text style={{fontWeight: 'bold'}}>Password</Text>
          <TextInput
            value={password}
            onChangeText={(value) => setPassword(value)}
            placeholder='Enter your password'
            style={styles.input}
            secureTextEntry
          />
          <View style={{ alignItems: 'flex-end', padding:5 }}>
            <TouchableOpacity onPress={handleLoginPress}>
                <Text style={{color: '#20B0B0'}}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.login} onPress={handleLoginPress}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Login</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row'}}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigate('SignUp')}>
            <Text style={{color: '#20B0B0', textDecorationLine: 'underline'}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    height: 300,
    width: '100%',
    overflow: 'hidden', 
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  input: {
    borderWidth: 1.5,
    borderRadius: 5,
    padding: 15,
    height: 50, 
    width: '100%',
    borderColor: 'gray'
  },
  login: {
    backgroundColor: '#20B0B0',
    borderRadius: 50,
    paddingHorizontal: 120,
    paddingVertical: 15
    },
});