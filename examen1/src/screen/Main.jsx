import {ScrollView, FlatList, StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from "react-native"
import Constants from 'expo-constants';
// import { Card } from "../components/Card/Card";
import { BottomBar } from "../components/bottomBar";
import { THEME } from "../theme/colors";
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { IMAGE, USERS } from '../constants/index'
import UsersList from "../components/card";
import { Stories } from "../components/stories";



export const Screen = () => {
    return(
        <View style={styles.container}>

            <View style={styles.headerContainer}>
                <Image style={styles.headerImage} source={IMAGE}/>
                <Text style={styles.textHeader}>Hey Alireza👋🏻</Text>
                <AntDesign name="search1" size={24} color="black" />
                <Ionicons name="ios-menu" size={24} color="black" />
            </View>
            <View style={styles.stories}>
                <Stories></Stories>
            </View>
            <FlatList
                style={styles.usersList}
                data={USERS}
                renderItem={({item: {name, job, rate,}})=>
                <UsersList name={name} job={job} rate={rate}/>
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
        paddingTop: Constants.statusBarHeight+10,
        backgroundColor: THEME.COLORS.GRAY.LIGHT,
        justifyContent: 'flex-start',
        width: '100%',
        flex: 1,
        padding: 20,
        gap: 10
    },
    stories:{
        paddingTop: 20,
    },
    headerContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerImage:{
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight:30
    },
    titleText:{
        marginTop: 5,
        marginBottom:5,
        fontSize: 30,
        fontWeight: '900',
    },
    cardContainer:{
        height: 60,
        width: 60,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: 'space-evenly'
    },
    textHeader: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    usersList:{
        height:250,
        marginTop: 150,
    },
    iconContainer: {
        marginLeft: 40,
        width: 50, 
        height: 50, 
        borderRadius: 10, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: THEME.COLORS.YELLOW,
      },
});