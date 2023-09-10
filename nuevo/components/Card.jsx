import React from "react";
import {Ionicons, AntDesign} from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";

const Card = ({isDarkBlue, text, iconName, iconType}) =>{
    const iconColor = isDarkBlue ?  '#537acd' : 'white'
    const CustomIcon =  
    iconType === 'Ionicons' 
        ? <Ionicons color={iconColor} name={iconName} size={30}/>
            :<AntDesign color={iconColor} name={iconName} size={30}/>
            return(
                <View style={[styles.cardContainer, 
                    isDarkBlue ? styles.cardContainerDark : styles.cardContainerLight]}>
                 <View style={[styles.cardIconContainer, 
                        isDarkBlue ? styles.cardIconContainerDark : styles.cardIconContainerLight]}>
                        {CustomIcon}
                 </View>
                <Text style={[styles.cardText, isDarkBlue ? styles.cardTextDark : styles.cardTextLight]}>{text}</Text>
            </View>
            )
        }
        
        const styles = StyleSheet.create({
            cardContainer:{
                gap:30,
                paddingHorizontal: 20,
                height:200,
                width:200,
                borderRadius:40,
                marginHorizontal: 5,
                justifyContent: 'space-evenly'
            },
            cardContainerLight:{
                backgroundColor: '#e6ecff',
            },
            cardContainerDark:{
                backgroundColor: '#2362df',
            },
            cardIconContainer:{
                width: 50,
                height: 50,
                padding: 5,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 52,
            },
            cardIconContainerLight:{
                backgroundColor: '#2362df',
            },
            cardIconContainerDark:{
                backgroundColor: '#e6ecff',
            },
            cardText:{
                fontSize:25,
                fontWeight: 'bold',
            },
            cardTextLight:{
                color: '#48525e'
            },
            cardTextDark:{
                color: 'white'
            },
        })
export default Card