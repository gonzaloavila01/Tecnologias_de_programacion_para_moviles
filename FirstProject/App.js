import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Alert,
} from 'react-native';

import Todo from './src/components/Todo';
import CustomButton from './src/components/CustomButton';
import TodoInput from './src/components/TodoInput';
import Constants from 'expo-constants';

export default function App() {
  // Declaración de estados
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  // Función para mostrar mensajes de error
  const handleShowError = (error) => {
    Alert.alert('Error', error, [{ text: 'Aceptar' }]);
  };

  // Función para obtener la fecha actual formateada
  const getDate = () => {
    const currentDate = new Date();
    return currentDate.toLocaleString();
  };
 
  // Función para agregar o actualizar una tarea
  const handleAddTodo = () => {
    // Validación de entrada vacía
    if (inputValue === '') return handleShowError('Debes darle un nombre a la tarea');

    const isEditing = editId !== null;
    const existingTodo = todos.some(
      (todo) =>
        todo.name.toLowerCase() === inputValue.toLowerCase() &&
        (!isEditing || todo.id !== editId)
    );

    // Validación de tarea duplicada
    if (existingTodo) {
      return handleShowError('Ya existe una tarea con ese nombre');
    }

    const newTodo = {
      id: isEditing ? editId : new Date().toISOString(),
      name: inputValue,
      isCompleted: false,
      dateAdded: getDate(),
      updated: isEditing ? getDate() : '',
    };

    // Actualizar una tarea existente
    if (isEditing) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === editId ? { ...todo, ...newTodo } : todo
        )
      );
      setEditId(null);
    } else {
      // Agregar una nueva tarea
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    }

    setInputValue('');
  };
  
  // Función para eliminar una tarea
  const handleDeleteTodo = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  // Función para marcar o desmarcar una tarea como completada
  const handleCompleteTodo = (todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  // Función para gestionar la edición de una tarea
  const handleUpdateButton = (todoId) => {
    // Si el botón de edición se presiona nuevamente, cancelar la edición
    if (todoId === editId) {
      setEditId(null);
      setInputValue('');
    } else {
      // Editar una tarea existente
      const todoToUpdate = todos.find((todo) => todo.id === todoId);
      setInputValue(todoToUpdate.name);
      setEditId(todoId);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>To do list</Text>
        <View style={styles.inputContainer}>
          <TodoInput
            value={inputValue}
            onChangeText={(value) => setInputValue(value)}
          />
          <CustomButton
            text={editId === null ? 'Add Task' : 'Update Task'}
            light
            onPress={handleAddTodo}
            iconName={editId === null ? 'plus' : 'edit'}
          />
        </View>
      </View>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Todo
            id={item.id}
            name={item.name}
            dateAdded={item.dateAdded}
            updated={item.updated}
            handleDelete={handleDeleteTodo}
            isCompleted={item.isCompleted}
            handleComplete={handleCompleteTodo}
            handleUpdate={handleUpdateButton}
            isUpdating={editId === item.id}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2a6355',
    flex: 1,
    paddingTop: Constants.statusBarHeight + 10,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
});
