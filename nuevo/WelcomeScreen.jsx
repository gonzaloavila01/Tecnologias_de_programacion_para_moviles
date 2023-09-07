import React from "react";
import { ScrollView, Image, StyleSheet, Text, View  } from "react-native";
import {Ionicons, AntDesign} from '@expo/vector-icons';
import Card from "./components/Card";

const WelcomeScreen = () => {
    
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Ionicons name="notifications-outline" size={30} color="black"/>
                <Image
                style={styles.headerImage}
                source={
                    require('../nuevo/assets/memoji.png')
                }
                />
            </View>
            <Text>
                <Text style={{color: '#c1c0c4'}}>Hello, </Text>
                <Text style={{color: '#2b3941'}}>Chris </Text>
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Card
                    isDarkBlue
                    text={'Start Training'}
                    iconName={'hdd'}
                    iconType={AntDesign}
                />
            </ScrollView>
            <Text style={styles.textHeader}>What are your symptoms?</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
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
    },
    textHeader:{
        fontSize: 24,
        color: '#495258',
        fontWeight: 'bold'
    }
})

export default WelcomeScreen