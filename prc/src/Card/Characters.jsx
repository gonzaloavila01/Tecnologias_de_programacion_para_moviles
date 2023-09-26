import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { FontAwesome, Foundation } from '@expo/vector-icons';

export const Characters = ({item, navigation}) =>{


    const [episode, setEpisode] = useState(JSON)

    // Las funciones Async van fuera del useEffect
    const getApiData = async () =>{
        try {
            const response = await fetch(item.episode[0])
            const data = await response.json()
            setEpisode(data)
        } catch (error) {
            console.log('Error', error.toString())
        }
    }

    useEffect(() =>{
        getApiData()
    },[])

    const StatusCheck = (status) =>{
        if(status ==="Alive") return(<FontAwesome name="heartbeat" size={18} color='#3FFF79'/>)
        else if (status === "Dead") return(<Foundation name="skull" size={24} color='#FF5D5D' />) 
        else return(<FontAwesome name="question" size={20} color= '#9e9e9e' />)
    }

    return(
    <TouchableOpacity onPress={() => navigation.navigate('Information', {item: item})}>
        <View style={styles.container}>
        <Image source={{uri: item.image }} 
            style={styles.imageStyle}
        />
        <View style={styles.infoContainer}>
            <View style={styles.statusContainer}>
                <Text style={[styles.generalText, styles.nameText]}>{item.name}</Text>
            </View>

            <View style={styles.statusContainer}>
                {StatusCheck(item.status)}
                <Text style={styles.generalText}>{item.status}</Text>
                <Text style={styles.generalText}>-</Text>
                <Text style={styles.generalText}>{item.species}</Text>
            </View>
            
            <View>
                <Text style={styles.labelText}>Last known location:</Text>
                <Text style={styles.generalText}>{item.location.name}</Text>
            </View>
            <View>
                <Text style={styles.labelText}>First seen in:</Text>
                <Text style={styles.generalText}>{episode.name}</Text>
            </View>
        </View>
        </View>
    </TouchableOpacity>
    
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 10,
        backgroundColor: '#3c3e44',
        paddingRight: 20,
        gap: 20,
        maxWidth: 390,
    },
    infoContainer:{
        gap: 10,
        maxWidth: 200,
    },
    statusContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    generalText:{
        color: 'white',
    },
    labelText:{
        color: '#858587',
    },
    nameText:{
        fontSize: 20,
        fontWeight: '600',
    },
    imageStyle:{
        width: 170,
        height: 170,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
    }
})