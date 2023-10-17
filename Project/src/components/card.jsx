import React from "react";
import { Text, View } from "react-native";
import { CardID } from "./CardId";
import { useAppContext } from "../hooks/useAppContext";
import { CardFooter } from "./CardFooter";

export const Card = () => {

    const {Persona} = useAppContext()

    return(
        <View style={{ borderWidth: 1, backgroundColor:!Persona.isActive?'white':'grey', justifyContent:'center', padding: 10}}>
            <Text style={{fontSize: 30}}>Component Card</Text>
            <CardID/>
            <Text>Name: {Persona.name}</Text>
            <CardFooter/>
        </View>
    )
}