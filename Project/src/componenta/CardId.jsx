import React from "react";
import { Text, View } from "react-native";
import { useAppContext } from "../hooks/useAppContext";

export const CardID = () => {

    const {Persona} = useAppContext()

    return(
        <View style={{ justifyContent: 'center'}}>
            <Text style={{ textAlign: 'center'}}>ID: {Persona.Id}</Text>
        </View>
    )
}
