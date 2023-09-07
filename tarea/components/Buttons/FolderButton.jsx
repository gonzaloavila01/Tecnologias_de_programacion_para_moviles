import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { THEME } from '../../theme/colors';

export const FolderButton=({text, backgroundColor, color})=>{
    return(
        <View style={{backgroundColor:backgroundColor, width:200, borderTopLeftRadius:20, borderTopRightRadius:20, 
        alignItems:'center', justifyContent:'center', padding:15}}>
            <TouchableOpacity>
                <Text style={{color:color, fontSize:17, fontWeight:'bold'}}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}