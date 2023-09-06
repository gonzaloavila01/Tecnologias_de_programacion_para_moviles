import React from "react";
import { ScrollView, StyleSheet, Text, View  } from "react-native";
import {Ionics} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Card from "./components/Card";

const WelcomeScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Ionics name="notifications-outline" size={30} color="black"/>
                <Image
                style={styles.headerImage}
                source={
                    require('../nuevo/assets/memoji.png')
                }
                />
            </View>
            <Text>
                <Text>Hello, </Text>
                <Text>Chris </Text>
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingHorizontal: 15,
    },
    headerContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    titleText:{
        marginTop: 15,
        fontSize: 35,
        fontWeight: 'bold',
    },
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

export default WelcomeScreen