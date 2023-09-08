import React from "react";
import { ScrollView, Image, StyleSheet, Text, View  } from "react-native";
import {Ionicons, AntDesign} from '@expo/vector-icons';
import Card from "./components/Card";
import Constants from 'expo-constants';
import SymptomCard from "./components/SymptmosCard";
const IMAGE = '../nuevo/assets/memoji.png';

const WelcomeScreen = () => {
    
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Ionicons name="notifications-outline" size={30} color="black"/>
                <Image
                style={styles.headerImage}
                source={
                    require(IMAGE)
                }
                />
            </View>
             <Text style={styles.titleText}>
                <Text style={{color: '#c1c0c4'}}>Hello </Text>
                <Text style={{color: '#2b3941'}}>Chris 👋🏻</Text>
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Card isDarkBlue={true} text={'Start Training'} iconName={'hdd'} iconType={'AntDesign'}/>
                <Card isDarkBlue={false} text={'Start Training'} iconName={'hdd'} iconType={'AntDesign'}/>
                <Card isDarkBlue={true} text={'Start Training'} iconName={'hdd'} iconType={'AntDesign'}/>
                <Card isDarkBlue={false} text={'Start Training'} iconName={'hdd'} iconType={'AntDesign'}/>
            </ScrollView>
            <Text style={styles.headerText}>What are your symptoms?</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <SymptomCard symptom='none'/>
                <SymptomCard symptom='fever'/>
                <SymptomCard symptom='sneeze'/>
                <SymptomCard symptom='none'/>
            </ScrollView>
            <View>
                <Text> Popular therapist</Text>
                <Text>See all</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: Constants.statusBarHeight+10,
        paddingHorizontal: 15,
        width:400,
        backgroundColor: 'white',
    },
    headerContainer:{
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerImage:{
        width:50,
        height: 50,
        borderRadius: 50,
    },
    titleText:{
        marginTop: 15,
        marginBottom:15,
        fontSize: 30,
        fontWeight: '900',
    },
    headerText:{
        fontSize: 25,
        color:'#495333',
        fontWeight: 'bold',
    },
    symptomsContainer:{
        backgroundColor: '#e6ebff',
        width: 125,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 20,
        alignItems: 'center',
        marginTop:15,
    },
})

export default WelcomeScreen