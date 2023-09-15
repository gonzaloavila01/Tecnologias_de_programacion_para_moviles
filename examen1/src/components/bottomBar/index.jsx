import React from "react";
import { StyleSheet, View } from "react-native";
import {AntDesign, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
const colorDefault = '#e6ecff'
const colorSelected = '#2263df'


export const BottomBar =() =>{
    return(
        <View style={styles.container}>
            <AntDesign name="home" size={30} color={colorSelected} />
            <MaterialCommunityIcons name="message-badge-outline" size={30} color={colorDefault} />
            <AntDesign name="plus" size={50} color="black"/>
            <AntDesign name="calendar" size={30} color={colorDefault} />
            <Ionicons name="ios-person-circle-outline" size={30} color={colorDefault} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        paddingVertical:10,

        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 20,
        borderWidth:1,
        borderColor: '#e6ecff'
    }
})