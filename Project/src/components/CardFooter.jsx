import React from "react";
import { Text, View} from "react-native";
import { CardLocation } from "./CardLocation";
import { CardAge } from "./CardAge";

export const CardFooter = () => {

    return(
        <View style={{ textAlign: 'center', borderColor: 'red', borderWidth: 1, padding: 10}}>
            <Text style={{ textAlign: 'center', fontSize: 20}}>Card Footer</Text>
            <CardLocation />
        </View>
    )
}