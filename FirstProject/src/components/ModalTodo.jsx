import React from "react"
import { View, Text, StyleSheet} from "react-native"

export const ModalTodo = ({id, name, dateAdded, updated, isCompleted}) =>{
    const actualizado = (updated) =>{
        if(updated !== '') return(
        <View style={styles.parrafos}>
            <Text style={styles.labelText}>Last update: </Text>
            <Text>{updated}</Text>
        </View>
        )
    }

    return(
        <View>
            <View style={styles.header}>
                <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold',}}>{name}</Text>
            </View>
            <View>
                <View style={[styles.parrafos, {marginBottom: 10, marginTop: 2}]}>
                    <Text style={styles.labelText}>ID: </Text>
                    <Text style={{fontSize: 14, color: 'white',}}>{id}</Text>
                </View>
                <View style={styles.parrafos}>
                    <Text style={styles.labelText}>Added on: </Text>
                    <Text style={{color:'white'}}>{dateAdded}</Text>
                </View>
                {actualizado(updated)}
                <View style={styles.parrafos}>
                    <Text style={styles.labelText}>Status</Text>
                    <Text style={styles.labelText}>{isCompleted? 'Completed': 'Pending'}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#2A6355',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        marginLeft: 4,
        width: 250,
        paddingVertical: 5,
    },
    parrafos:{
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    labelText:{
        fontWeight: 'bold',
        color: 'white'
    },
})