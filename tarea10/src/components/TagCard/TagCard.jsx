import React from "react";
import { Text, View, StyleSheet, TouchableOpacity} from "react-native";
import { Entypo } from '@expo/vector-icons';

export const TagCard = ({tag})=> {

    return(
        <TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.text}>{tag}</Text>
                <Entypo name="cross" size={24} color="gray" />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width: 100,
        height: 40,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:10,
        marginHorizontal: 5,
        flexDirection: 'row'
    },
    text: {
        fontSize: 15, 
        textTransform: 'capitalize',
        color: 'gray'
    },
})