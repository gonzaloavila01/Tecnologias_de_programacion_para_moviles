import React from "react";
import { useState } from "react";
import { View, StyleSheet, Text, Modal } from "react-native";
import CustomButton from "./CustomButton";
import { ModalTodo } from "./ModalTodo";

const Todo = ({ id, name, handleDelete, handleComplete, isCompleted, dateAdded, handleUpdate, updated, isUpdating }) => {
  
  const updateText = (updated) =>{
    if(updated !== ''){
        return(
            <Text style={[styles.dateAdded, isCompleted&&styles.completedFormat]}>Last Update: {'\n'}{updated}</Text>
        )
    }
  }
  
  const [modalVisible, setModalVisible] = useState(false)

  const muestraModal = () =>{
    setModalVisible(true)
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
          <CustomButton light iconName={'eye'} onPress={() => muestraModal()}/>
        </View>

        <Modal
          animationType="fade"
          visible={modalVisible}
          transparent={true}
          onRequestClose={() => {
              setModalVisible(!modalVisible);
          }}
          >
          <View style={styles.Modal}>
              <ModalTodo id={id} name={name} dateAdded={dateAdded} updated={updated} isCompleted={isCompleted}/>    
              <CustomButton light  iconName={'eye-slash'} onPress={() => setModalVisible(!modalVisible)}/>                
          </View> 
        </Modal>
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
  Modal:{
    backgroundColor: 'black',
    width: 250,
    justifyContent:'center',
    alignItems: 'center',
    paddingBottom: 10,
    borderRadius: 20,
    gap: 10,
    marginTop: 350,
    marginLeft: '20%',
},
});

export default Todo;