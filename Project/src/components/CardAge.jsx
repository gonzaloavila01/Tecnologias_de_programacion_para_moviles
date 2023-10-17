import { Text, View } from "react-native";
import { CardSchool } from "./CardSchool";
import { useAppContext } from "../hooks/useAppContext";

export const CardAge = () => {

    const {Persona} = useAppContext()

    return(
        <View style={{ justifyContent: 'center', borderWidth: 1, borderColor: 'green', padding: 20}}>
            <Text style={{ textAlign: 'center', fontSize: 20}}>Card Age</Text>
            <Text>Age: {Persona.age}</Text>
            <CardSchool/>
        </View>
    )
}