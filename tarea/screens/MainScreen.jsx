import { View, Text } from "react-native";
import HeatherMain from "../components/Main/HeatherMain";
import ContentMain from "../components/Main/ContentMain";

export default function MainScreen(){
    return(
        <View>
            <HeatherMain/>
            <ContentMain/>
        </View>
    )
}
