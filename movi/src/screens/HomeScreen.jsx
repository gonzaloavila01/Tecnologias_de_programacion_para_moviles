import React from "react";
import { Button, Text, View } from "react-native";
import { Header } from "../components/Header";

const HomeScreen = ({navigation}) =>{

    const {canGoBack, goBack} = navigation

    return(
        <View>
            <Header></Header>
            <Text>Home Screen</Text>
            <Button title="Go to the Login page" onPress={() => navigation.navigate('Login', {name: 'Gonzalo'})}></Button>
            {/* <Button title='Go back' disabled={!canGoBack()}/> */}
        </View>
    )
}
export default HomeScreen