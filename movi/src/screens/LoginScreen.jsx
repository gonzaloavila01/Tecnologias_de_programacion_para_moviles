import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, View } from "react-native";
import { Header } from "../components/Header";

const LoginScreen = ({navigation, route}) =>{
    const  {name} = route.params
    // const {canGoBack, goBack} = navigation
    const {canGoBack, goBack} = useNavigation()
    return(
        <View>
            <Header></Header>
            <Text>Login Screen  {name}</Text>
            <Button title='Go back' disabled={!canGoBack} onPress={()=>goBack()}/>      
        </View>
    )
}

export default LoginScreen