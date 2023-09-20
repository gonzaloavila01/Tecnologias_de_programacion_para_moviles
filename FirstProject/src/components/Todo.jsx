import React from "react";
import { View, StyleSheet, Text } from "react-native";
import CustomButton from "./CustomButton";

const Todo = ({ id, name, handleDelete, handleComplete, isCompleted, dateAdded, handleUpdate, updated, isUpdating }) => {
  
  const updateText = (updated) =>{
    if(updated !== ''){
        return(
            <Text style={[styles.dateAdded, isCompleted&&styles.completedFormat]}>Last Update: {'\n'}{updated}</Text>
        )
    }
  }
  
  return (
    <View style={[styles.container, isCompleted && styles.todoCompleted]}>
      <View>
        <Text style={[styles.tittle, isCompleted && styles.completedTittle]}>{name}</Text>
        <Text style={styles.dateAdded}>Added on: {'\n'}{dateAdded}</Text>
        {updateText(updated)}
      </View>
      <View>
      <View style={{ flexDirection: 'row', gap: 10 }}>
          <CustomButton light={isCompleted ? false : true} iconName={'trash'} onPress={() => handleDelete(id)} />
          <CustomButton  light={isCompleted ? false : true} iconName={isUpdating? 'remove':'edit'} onPress={()=> handleUpdate(id)}/>
          <CustomButton iconName={isCompleted ? 'arrow-circle-o-left' : 'check-circle-o'} light={isCompleted ? false : true} onPress={() => handleComplete(id)} />
        </View>
      </View> 
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    marginTop: 30,
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#2d705f',
    borderColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todoCompleted: {
    backgroundColor: '#000000',
  },
  tittle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  completedTittle: {
    textDecorationLine: 'line-through',
    color: '#b3b3b3',
  },
  dateAdded: {
    color: 'white',
    fontSize: 8,
  },
});

export default Todo;
