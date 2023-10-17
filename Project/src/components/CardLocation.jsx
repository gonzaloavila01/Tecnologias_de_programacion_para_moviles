import React from "react";
import { Text, View } from "react-native";
import { CardAge } from "./CardAge";
import { useAppContext } from "../hooks/useAppContext";

export const CardLocation = () => {

    const {Persona} = useAppContext()

    return(
        <View style={{ textAlign: 'center', borderWidth: 1, borderColor: 'blue', padding: 10}}>
            <Text style={{ textAlign: 'center', fontSize: 20}}>Location Card</Text>
            <Text>Country: {Persona.country}</Text>
            <Text>City: {Persona.city}</Text>
            <CardAge/>
        </View>
    )
}