import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AppContext } from "../context/AppContext";
import { useAppContext } from "../hooks/useAppContext";

export const CardSchool = () => {

    const {Persona, handleIsActive} = useAppContext()

    return(
        <View style={{ textAlign: 'center', borderWidth: 1, borderColor: 'purple', padding: 10}}>
            <Text style={{ textAlign: 'center', fontSize: 20}}>Card School</Text>
            <Text>{Persona.school}</Text>
            <TouchableOpacity onPress={handleIsActive} style={{borderColor: '#ff00ff', borderWidth: 1}}>
                <Text>Is Active: {JSON.stringify(Persona.isActive)}</Text>
            </TouchableOpacity>
        </View>
    )
}
