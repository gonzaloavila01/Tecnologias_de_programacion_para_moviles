import React from "react";
import { View, StyleSheet, Text} from "react-native";
import CustomButton from "./CustomButton";


const Todo = ({id, name, handleDelete, handleComplete, isCompleted}) => {
    return(
        <View style={[styles.container, isCompleted&&styles.todoCompleted]}>
            <Text style={[styles.tittle, isCompleted&&styles.completedTittle]}>{name}</Text>
            <View style={{flexDirection: 'row', gap: 10}}>
                <CustomButton text={'Delete'} light={isCompleted ? false : true} onPress={() => handleDelete(id)}/>
                <CustomButton text={'Edit'} light={isCompleted ? false : true}/>
                <CustomButton text={isCompleted ? 'Done' : 'Complete'} light={isCompleted ? false : true} onPress={() => handleComplete(id)}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-between',
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#2d705f',
        borderColor: 'white',
    },
    todoCompleted:{
        backgroundColor: '#2c719f',
    },
    tittle:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    completedTittle:{
        textDecorationLine: 'line-through',
        color: '#b3b3b3'
    }
})

export default Todo