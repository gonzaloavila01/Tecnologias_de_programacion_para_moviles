import React from "react";
import { Text } from "react-native";

const LoginScreen = ({navigation, route}) =>{
    const  {name} = route.params
    return(
        <Text>Login Screen  {name}</Text>
    )
}

export default LoginScreen