import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
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

  const handleAddTodo = () => {
    if(inputValue === '') return

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


  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: 20, paddingTop: 10}}>
        <Text style={{fontSize: 40, fontWeight: 'bold', textAlign: 'center', color: 'white'}}>Todo list</Text>
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
              renderItem={(({ item: { name } }) => <Todo name={name}/> )}
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