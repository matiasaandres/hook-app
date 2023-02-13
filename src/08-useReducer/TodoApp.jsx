import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./TodoReducer";
import { initialState } from "./infoTodo";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialTodo = initialState;

const init = () =>{
  return JSON.parse(localStorage.getItem('todos'))||[];
}

// init permite la carga del local storage de los todos 
export const TodoApp = () => {
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

  return (
    <>
      <h1>
        TodoApp 10, <small>pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo ={id => handleDeleteTodo(id)}/>
        </div>
        <div className="col-5">
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
