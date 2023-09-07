import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { View, Text, StyleSheet } from "react-native";

const Card = ({isDarkBlue, text, iconName, iconType}) =>{
    const iconColor = isDarkBlue ? 'white' : '#537acd'
    const CustomIcon = 
    iconType === 'Ionicons' 
        ? <Ionicons color={iconColor} name={iconName} size={30}/>
            :<AntDesign color={iconColor} name={iconName} size={30}/>

    return(
        <View style={[styles.cardContainer, 
            isDarkBlue ? styles.cardContainerDark : styles.cardContainerLight]}>
        <View style={styles.cardIconContainer}>
            {CustomIcon}
        </View>
        <Text style={[styles.cardText, isDarkBlue ? styles.cardTextDark : styles.cardTextLight]}>{text}</Text>
    </View>
    )
}


const styles = StyleSheet.create({
    cardContainer:{
        height: 200,
        width: 220,
        borderRadius:40,
        paddingHorizontal:30,
        justifyContent: 'center',
        gap: 50,
    },
    cardContainerLight:{
        backgroundColor: '#e6ecff',
    },
    cardContainerDark:{
        backgroundColor: '#2263df',
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
    cardTextLight:{
        color: '#4852'
    },
    cardTextDark:{
        color: '#4852'
    },
    cardIconContainerLight:{
        backgroundColor: ''
    },
    cardIconContainerDark:{
        backgroundColor: ''
    },

})
export default Card