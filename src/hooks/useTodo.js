
import React, { useEffect, useReducer} from 'react'
import { todoReducer } from "../08-useReducer/TodoReducer";
import { initialState } from "../08-useReducer/infoTodo";

const initialTodo = initialState;
const init = () =>{
    return JSON.parse(localStorage.getItem('todos'))||[];
  }

export const useTodo = () => {


    const [todos, dispatch] = useReducer(todoReducer, initialTodo,init);

    useEffect(() => {
 
    // ingresamos los todos al local storage cuando el estra de la lista cambia
     localStorage.setItem('todos',JSON.stringify(todos)||[])
    
    } ,[todos]);
 
 
   const handleNewTodo = (todo) => {
     const action = {
       type:'[TODO] Add Todo',
       payload:todo
     }
     dispatch(action);
   };
 
   const handleDeleteTodo = (id) => {
     dispatch({
       type:'[TODO] Remove Todo',
       payload:id
     });
   }
 
   const handleToggleTodo = (id) =>{
 
 
     dispatch({
        type:'[TODO] Toggle Todo',
        payload:id
      });
 
   }




  return {

todos,
handleDeleteTodo,
handleNewTodo,
handleToggleTodo



  }
}
