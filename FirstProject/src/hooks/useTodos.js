import { useState } from "react";
import { handleShowError } from "../utils/showError";

export const useTodos = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  const getDate = () => {
    const currentDate = new Date();
    return currentDate.toLocaleString();
  };

  const handleAddTodo = () => {
    if (inputValue === '') return handleShowError('Debes darle un nombre a la tarea');

    const isEditing = editId !== null;
    const existingTodo = todos.some(
      (todo) =>
        todo.name.toLowerCase() === inputValue.toLowerCase() &&
        (!isEditing || todo.id !== editId)
    );

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

    if (isEditing) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === editId ? { ...todo, ...newTodo } : todo
        )
      );
      setEditId(null);
    } else {
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    }

    setInputValue('');
  };

  const handleDeleteTodo = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  const handleCompleteTodo = (todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const handleUpdateButton = (todoId) => {
    if (todoId === editId) {
      setEditId(null);
      setInputValue('');
    } else {
      const todoToUpdate = todos.find((todo) => todo.id === todoId);
      setInputValue(todoToUpdate.name);
      setEditId(todoId);
    }
  };

  return {
    inputValue,
    todos,
    editId,
    handleAddTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateButton,
    setInputValue
  };
};
