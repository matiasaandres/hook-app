import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./TodoReducer";
import { initialState } from "./infoTodo";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks/useTodo";


// init permite la carga del local storage de los todos 
export const TodoApp = () => {

  const {todos,handleDeleteTodo,handleNewTodo,handleToggleTodo} = useTodo();

  return (
    <>
      <h1>
        TodoApp 10, <small>pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList 
          todos={todos} 
          onDeleteTodo ={id => handleDeleteTodo(id)}
          onToggleTodo = {id => handleToggleTodo(id)}
          />
        </div>
        <div className="col-5">
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
