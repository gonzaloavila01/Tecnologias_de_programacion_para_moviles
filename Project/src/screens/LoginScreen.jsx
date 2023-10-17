import React, { useState } from 'react'
import { Alert, StyleSheet } from 'react-native'
import { Text, TextInput, TouchableOpacity } from 'react-native'
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavigation } from '@react-navigation/native'


const navigation = useNavigation()

export const LoginScreen = () => {
    const {handleLogin: onLogin, user} = useAuthContext()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    console.log(user)

    Alert.alert('Error', 'Credenciales invalidas', [{
        
    }])

    const handleLogin = async({navigation}) =>{
        try {
            const loginValue = await onLogin(username, password)
            if(loginValue){
                return navigation.navigate('Home')
            }
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <View>
        <Text>Iniciar Sesión</Text>
        <TextInput value={username} onChange={(value)=>setUsername()} placeholder='Ingresa tu usuario'/>
        <TextInput value={password} onChange={(value)=>setPassword()} placeholder='Ingresa tu contraseña' secureTextEntry/>
        <TouchableOpacity style={{borderWidth: 1, backgroundColor:'green', paddingVertical: 20}} onPress={handleLogin}>
            <Text style={{textAlign: 'center', color:'white'}}>Iniciar Sesión</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    inputHolder:{
        borderWidth:1,
    }
})
