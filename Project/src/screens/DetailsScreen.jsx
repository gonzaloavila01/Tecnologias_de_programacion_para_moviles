import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { useAuthContext } from '../hooks/useAuthContext'

export const DetailsScreen = () => {
    const {navigate} = useNavigation()
    const {handleLogout: onLogout} = useAuthContext()

    handleLogout= () =>{
        try {
            onLogout(),
            navigate('Login')
        } catch (error) {
            console.error(error)
        }
    }


  return (
    <View>
       <Text>Details</Text> 
       <Button title='Ir a mi cuenta' onPress={() => navigate('Account')}/>
       <Button title='Cerrar Sesión' onPress={() => handleLogout}/>
    </View>
  )
}
