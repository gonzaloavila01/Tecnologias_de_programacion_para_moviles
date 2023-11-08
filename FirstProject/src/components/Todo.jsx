import React, {useState} from "react";
import { StyleSheet, Text, View, Modal} from "react-native";
import { CustomButton } from "./CustomButton";
import { TodoModal } from "./TodoModal";


export const Todo = ({id, nombre, handleDelete, isComplete, handleComplete, handleUpdate, updated, isUpdating , created}) =>{

    const updateText = (updated) =>{
        if(updated !== ''){
            return(
                <Text style={[styles.subText, isComplete&&styles.completedFormat]}>Last Update: {updated}</Text>
            )
        }
    }

  const [modalVisible, setModalVisible] = useState(false)

  const muestraModal = () =>{
    setModalVisible(true)
  }


    return(
        <View style={[styles.container, isComplete&&styles.completedContainer]}>
            <View>
                <Text style={[styles.tittle, isComplete&&styles.completedFormat]}>{nombre}</Text>
                <Text style={[styles.subText, isComplete&&styles.completedFormat]}>Created: {created}</Text>
                {updateText(updated)}
            </View>
            <View style={styles.buttonContainer}>
            <CustomButton light={isComplete ? false : true} iconName={'trash'} onPress={() => handleDelete(id)} />
            <CustomButton  light={isComplete ? false : true} iconName={isUpdating? 'remove':'edit'} onPress={()=> handleUpdate(id)}/>
            <CustomButton iconName={isComplete ? 'arrow-circle-o-left' : 'check-circle-o'} light={isComplete ? false : true} onPress={() => handleComplete(id)} />
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
              <TodoModal id={id} name={nombre} dateAdded={created} updated={updated} isCompleted={isComplete}/>    
              <CustomButton light  iconName={'eye-slash'} onPress={() => setModalVisible(!modalVisible)}/>                               
                </View> 
            </Modal>
            
        </View>
    )
}

const styles =  StyleSheet.create({
    container:{
        borderRadius: 20,
        marginTop: 30,
        width: 400,
        paddingHorizontal: 15,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 5,
        backgroundColor: '#2d705f',
    },
    completedContainer:{
        backgroundColor: '#B0E0E6',
    },
    buttonContainer:{
        flexDirection: 'row',
        gap: 8,
    }, 
    tittle:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    subText:{
        fontSize: 8,
        color: '#e0e0e0',
    },
    completedFormat:{
        textDecorationLine: 'line-through',
        color: '#b3b3b3',
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
})