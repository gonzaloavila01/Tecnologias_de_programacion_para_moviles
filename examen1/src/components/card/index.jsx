import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
const IMAGE = require('../../../assets/memoji.png')

const UsersList = ({name, job, rate}) =>{
    return(
        <View style={styles.container}>
            <Image
                source={IMAGE}
                style={styles.image}
                /> 
            <View style={styles.therapistInfo}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.therapistJob}>{job}</Text>
            </View>
            <View style={styles.therapistRate}>
                <Text style={styles.grayText}>{rate}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      borderRadius: 10,
      backgroundColor: '#f7f8fa',
      flexDirection: 'row',
      justifyContent: 'flex-start', 
      alignItems: 'center',
      paddingVertical: 20,
    },
    image: {
      marginLeft: 30,
      height: 60,
      width: 60,
      borderRadius: 50,
    },
    name: {
      fontSize: 20,
      color: '#495258',
      fontWeight: 'bold',
    },
    grayText: {
      color: '#d4d4d7',
      fontWeight: 'bold',
      fontSize: 12,
      marginBottom: 15,
    },
    therapistRate: {
      marginRight: 20,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
      marginLeft: 10, 
    },
    therapistInfo: {
      marginLeft: 30, 
      flex: 1, 
    },
  });
  
export default UsersList