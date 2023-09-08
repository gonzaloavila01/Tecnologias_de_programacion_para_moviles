import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { AntDesign} from '@expo/vector-icons';

const Therapist = ({image, name, job, rate}) =>{
    return(
        <View style={styles.container}>
            <Image
                source={
                    require(image)
                }
                style={styles.image}
                />
            <View style={styles.therapistInfo}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.therapistJob}>{job}</Text>
            </View>
            <View style={styles.therapistRate}>
                <AntDesign name={rate>4 ? 'star' : 'staro'} size={24} color={'#2263df'}></AntDesign>
                <Text style={styles.grayText}>{rate.toFixed(1)}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        borderRadius: 10,
        backgroundColor: '#f7f8fa', 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'center', 
        paddingVertical: 20
    },
    image:{
        height: 40,
        width: 40,
        borderRadius: 50,
    },
    name:{
        fontSize: 20,
        color: '#495258',
        fontWeight: 'bold',
    },
    grayText:{
        color: '#d4d4d7',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 5
    },
    therapistRate:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    }

})

export default Therapist