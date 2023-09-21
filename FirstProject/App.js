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
import { useTodos } from './src/hooks/useTodos';

export default function App() {
  const {
    inputValue,
    todos,
    editId,
    handleAddTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateButton,
    setInputValue
  } = useTodos()

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