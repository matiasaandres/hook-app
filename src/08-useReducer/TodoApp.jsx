import React, { useReducer } from "react";
import { todoReducer } from "./TodoReducer";
import { initialState } from "./infoTodo";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialTodo = initialState;

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodo);

  return (
    <>
      <h1>
        TodoApp 10, <small>pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
        </div>
        <div className="col-5">
        <TodoAdd/>
        </div>
      </div>
    </>
  );
};
