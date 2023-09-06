import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { View, Text } from "react-native";

const Card = () =>{
    return(
        <View style={styles.cardContainer}>
        <View>
            <AntDesign name="hdd" size={24} color="white" />
        </View>
        <Text style={styles.cardText}>Start training</Text>
    </View>
    )
}


const styles = StyleSheet.create({
    cardContainer:{
        height: 200,
        width: 220,
        backgroundColor: '#e6ecff',
        borderRadius:40,
        paddingHorizontal:30,
        justifyContent: 'center',
        gap: 50,
    },
    cardIconContainer:{
        backgroundColor: '#2362df',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height:50,
        padding: 5,
        borderRadius:50,
    },
    cardText:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#4852'
    }
})
export default Card