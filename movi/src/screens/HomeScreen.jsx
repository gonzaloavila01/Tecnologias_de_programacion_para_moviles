import React from "react";
import { Button, Text, View } from "react-native";

const HomeScreen = ({navigation}) =>{
    return(
        <View>
            <Text>Home Screen</Text>
            <Button title="Go to the Login page" onPress={() => navigation.navigate('Login', {name: 'Gonzalo'})}></Button>
        </View>
    )
}

export default HomeScreen