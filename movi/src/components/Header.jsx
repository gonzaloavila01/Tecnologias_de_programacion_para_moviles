import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View , Text} from "react-native";
import AntDesign from '@expo/vector-icons'


const Header =() =>{
    const {canGoBack, goBack} = useNavigation()
    return(
        <View style={{backgroundColor: 'red', paddingVertical:20, flexDirection:'row'}}>
            <AntDesign name="leftcircleo" size={24} color="white" onPress={()=>goBack} disabled={!canGoBack}></AntDesign>
            <Text style={{color: 'white', fontsize:20}}>Go Back</Text>
        </View>
    )
}

export default Header