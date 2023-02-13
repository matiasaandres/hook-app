import React, { useEffect, useReducer } from "react";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks/useTodo";


// init permite la carga del local storage de los todos 
export const TodoApp = () => {

  const {todos,handleDeleteTodo,handleNewTodo,handleToggleTodo,pendingTodoCount, todoCount} = useTodo();

  return (
    <>
      <h1>
        TodoApp: {todoCount}, <small>pendientes: {pendingTodoCount}</small>
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
