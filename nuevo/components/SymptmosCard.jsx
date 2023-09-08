import React from "react";
import { StyleSheet, View, Text } from "react-native";

const SymptomCard = () =>{
    const symptomName = symptom === 'none' ? "I'm fine" : symptom
    const symptomIcon = symptom === 'none' ? '' : symptom
    return(
        <View style={styles.symptomsContainer}>
            <Text>
                {symptomIcon}
            </Text>
            <Text style = {styles.symptomText}>
                {symptomName}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    symptomsContainer:{
        backgroundColor: '#86ecff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap : 10,
        width : 150,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 20,
        marginRight: 15
    },
    symptomText:{
        fontSize: 18,
        fontWeight: '600',
        color: '#48525e',
        textTransform: 'capitalize'
    }
})

export default SymptomCard