import React from "react";
import { StyleSheet, View, Text } from "react-native";

const SymptomsCard = ({symptom}) =>{
    return(
        <View>
            <View style={styles.symptomsContainer}>
                <Text style={styles.SymptomText}>{symptom}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    symptomsContainer:{
        backgroundColor: '#e6ebff',
        width: 140,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginTop:15,
        marginRight: 5,
    },
    SymptomText:{
        fontSize:18,
        fontWeight:'600',
        textTransform: 'capitalize',
    }
})

export default SymptomsCard