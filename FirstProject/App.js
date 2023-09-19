import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Todo from './src/components/Todo';
import CustomButton from './src/components/CustomButton';
import TodoInput from './src/components/TodoInput';
import Constants from 'expo-constants';

export default function App() {


  // const TODOS = [
  //   {id:1, name: 'Task 1', isCompleted: false},
  //   {id:2, name: 'Task 2', isCompleted: false},
  // ]

  const [inputValue, setInputValue] = useState('')
  const[todos, setTodos] = useState([])

  const handleShowError = (error) =>
    Alert.alert('Error', error, 
    [{text: 'Aceptar'}]
    );

  const handleAddTodo = () => {
    if(inputValue === '') return handleShowError('Debes darle un nombre a la tarea')

  const existingTodo= todos.some(
    todo =>  todo.name.toLowerCase() === inputValue.toLowerCase()
    )
    if (existingTodo) return handleShowError('Ya existe una tarea con ese nombre')

    setTodos([
        ...todos,
        {
        id: new Date().toISOString(),
        name: inputValue,
        isCompleted: false
      }
    ])
    setInputValue('')
  }

  const handleDeleteTodo = (todoId) =>{
    const filteredArray = todos.filter(
      todo => todo.id !== todoId
      )

    setTodos(filteredArray)
  }

  const handleCompleteTodo = (todoId) => {
    const mappedArray = todos.map(todo => {
      if(todo.id === todoId){
        return{
          ...todo,
          isCompleted: !todo.isCompleted
        }
      }
      return todo
    })
    setTodos(mappedArray)
  }


  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: 20, paddingTop: 10}}>
        <Text style={{fontSize: 40, fontWeight: 'bold', textAlign: 'center', color: 'white'}}>To do list</Text>
          <View style={{flexDirection: 'row', marginTop: 20, gap:20}}>
            <TodoInput 
              value={inputValue}
              onChangeText={(value) => setInputValue(value)}
              />
            <CustomButton onPress={handleAddTodo} text={'Add Task'} light/>
          </View>
          <FlatList
              data={todos}
              keyExtractor={(item) => item.id}
              renderItem={(({ item: {id,  name, isCompleted } }) => 
              <Todo id={id} name={name} handleDelete={handleDeleteTodo} isCompleted={isCompleted} handleComplete={handleCompleteTodo}/> )}
          />
      </View>
      <StatusBar style='light'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2a6355',
    height: '100%',
    paddingTop: Constants.statusBarHeight+10,
  },
});