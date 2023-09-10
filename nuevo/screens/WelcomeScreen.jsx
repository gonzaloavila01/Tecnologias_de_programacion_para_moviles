import React from "react";
import { ScrollView, Image, StyleSheet, Text, View, FlatList  } from "react-native";
import {Ionicons, AntDesign} from '@expo/vector-icons';
import Card from "../components/Card";
import Constants from 'expo-constants';
import SymptomsCard from "../components/SymptmosCard";
import Therapist from "../components/Therapist";
import { CARDS } from "../CardList";
import { THERAPISTS } from "../lists/TherapistList";
import { BottomBar } from "../components/BottomBar";
const IMAGE = require('../assets/memoji.png');



const WelcomeScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Ionicons name="notifications-outline" size={30} color="black"/>
                <Image
                style={styles.headerImage}
                source={IMAGE}
                />
            </View>
             <Text style={styles.titleText}>
                <Text style={{color: '#c1c0c4'}}>Hello </Text>
                <Text style={{color: '#2b3941'}}>Chris 👋🏻</Text>
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {CARDS.map(({id, iconName, text, iconType, isDarkBlue})=>
                <Card key={id} isDarkBlue={isDarkBlue} text={text} iconName={iconName} iconType={iconType}/>
                )}
            </ScrollView>
            <Text style={styles.headerText}>What are your symptoms?</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <SymptomsCard symptom={"😁 I'm fine"}/>
                <SymptomsCard symptom={"🫥 Diarrea"}/>
                <SymptomsCard symptom={"🤢 Noucius"}/>
                <SymptomsCard symptom={"🤕 Headache"}/>
                <SymptomsCard symptom={"🤒 Fever"}/>
            </ScrollView>
            <View style={styles.therapistTitle}> 
                <Text style={styles.headerText}> Popular therapist</Text>
                <Text style={{color:'#d4d4d7'}}>See all</Text>
            </View>
            <FlatList
                style={styles.therapistList}
                data={THERAPISTS}
                renderItem={({item: {name, job, rate,}})=>
                <Therapist name={name} job={job} rate={rate}/>
                }
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={<Text style={{fontSize: 8}}>  </Text>}
            />
            <BottomBar/>
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
    therapistTitle:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5,
    },
    therapistList:{
        height:250,
    }
})

export default WelcomeScreen