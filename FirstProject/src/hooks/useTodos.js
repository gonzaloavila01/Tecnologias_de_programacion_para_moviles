import { useReducer, useState } from "react"
import { handleshowErrorr } from "../helpers/showError"


const initialState={
  canAdd: true,
  editId: '',
  inputVal: '',
  toDos:[]
}

const TODO_ACTIONS ={
  ADD_TODO: 'ADD_TODO',
  COMPLETE_TODO: 'COMPLETE_TODO',
  DELETE_TODO: 'DELETE_TODO', 
  UPDATING_TODO: 'UPDATING_TODO',
  SET_INPUT_VAL: 'SET_INPUT_VAL',
}

const getDate = () =>{
  const currentDate = new Date()
  formatedDate =  ''+currentDate.getFullYear()+'/'+(currentDate.getMonth()+1)+'/'+currentDate.getDate()+' '+currentDate.getHours()+':'+currentDate.getMinutes()    
  return formatedDate
}

function reducer(state, action){
  switch (action.type){

      
      //-----------------------------------------------------------------------------------------------------------------------------------------------------------------
      case TODO_ACTIONS.SET_INPUT_VAL:
        return{
          ...state,
          inputVal: action.value
        }
      //-----------------------------------------------------------------------------------------------------------------------------------------------------------------
      //* Agregar una tarea o Editar el nombre de una
      //-----------------------------------------------------------------------------------------------------------------------------------------------------------------
      case TODO_ACTIONS.ADD_TODO:

        const existingTodo=state.toDos.some( toDo => toDo.nombre.toLowerCase() === state.inputVal.toLowerCase())
        if (existingTodo) {
          handleshowErrorr('Ya hay una tarea con ese nombre')
          return state
        }

        if(state.canAdd){
          toDoing = state.toDos
          return{
            ...state, 
            toDos: [...toDoing, {
              id: new Date().toISOString(),
              nombre: state.inputVal,
              isCompleted: false,
              isUpdating: false,
              edited: '',
              crated: getDate(),
            }],
            canAdd: true,
            inputVal: '',
          }
        }else{
          const mappedTodo = state.toDos.map(todo =>{
            if (todo.id === state.editId){
              return {
                ...todo, 
                nombre: state.inputVal, 
                isUpdating:false, 
                updated: getDate()
              }
            }
            return todo
          })

          return{
            ...state,
            toDos: mappedTodo,
            editId: '',
            canAdd: true,
            inputVal: '',
          }
        }
      //-------------------------------------------------------------------------------------------------------------------------------------------------------------- 
      //* Habilitar el modo de edición de tareas
      //--------------------------------------------------------------------------------------------------------------------------------------------------------------  
      case TODO_ACTIONS.UPDATING_TODO:
         //Si otro To do estaba en modo de edición, lo desactiva
          const mappedArray = state.toDos.map( todo =>{
            if( todo.id !== action.todoId && todo.isUpdating){
              return {...todo, isUpdating:false}
            }

            //Cambia el botón a activar o desactivar el modo de edición
            if( todo.id === action.todoId){
              if(todo.isUpdating){
                state.inputVal= ''
                state.canAdd=true 
                state.editId= ''
                return {...todo, isUpdating: false}
              }
              state.canAdd= false
              state.inputVal= todo.nombre
              state.editId= action.todoId
              return {...todo, isUpdating:true}
            }
            return todo
          })

          return{
            ...state,
            toDos: mappedArray
          }
        //--------------------------------------------------------------------------------------------------------------------------------------------------------------
        //* Eliminar una Tarea
        //--------------------------------------------------------------------------------------------------------------------------------------------------------------  
      case TODO_ACTIONS.DELETE_TODO: 
          const filteredArray = state.toDos.filter(todo=> todo.id !== action.todoId)
          return{
            ...state,
            toDos: filteredArray,
          }
        //--------------------------------------------------------------------------------------------------------------------------------------------------------------  
        //* Completar una Tarea
        //--------------------------------------------------------------------------------------------------------------------------------------------------------------  
      case TODO_ACTIONS.COMPLETE_TODO:
        const mappedComArray = state.toDos.map( todo =>{
             if (todo.id === action.todoId){
               if(todo.isCompleted){
                 return {...todo, isCompleted: false}
                 }
               return {...todo, isCompleted: true}
             }
             return todo
           })
           
           return{
            ...state, toDos: mappedComArray
           }

        //--------------------------------------------------------------------------------------------------------------------------------------------------------------  
  }
}

export const useTodos= () =>{
    
  const [state, dispatch] = useReducer(reducer, initialState)

    
  const handelAddTodo = () => {
    if (state.inputVal === '')return(handleshowErrorr('La tarea debe tener un nombre'))
    if(state.inputVal.length >= 11)return(handleshowErrorr('El nombre de la tarea es muy largo'))
    dispatch({type: TODO_ACTIONS.ADD_TODO})
  }
  
  const handleDeleteTodo = (todoId) => {
    dispatch({type: TODO_ACTIONS.DELETE_TODO, todoId: todoId})
  }

  const handleCompleteTodo = (todoId) => {
    dispatch({type: TODO_ACTIONS.COMPLETE_TODO, todoId: todoId})
  }
  
  const handleUpdateButton = (todoId) => {
    dispatch({type: TODO_ACTIONS.UPDATING_TODO, todoId: todoId})
  }

  const handleUpdateInput = (value) =>{
    dispatch({type: TODO_ACTIONS.SET_INPUT_VAL, value: value})
  }

  return {
    handelAddTodo,
    handleCompleteTodo,
    handleUpdateButton,
    handleDeleteTodo,
    handleUpdateInput,
    state,
  }
}