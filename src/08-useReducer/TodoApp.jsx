import React, { useReducer } from "react";
import { todoReducer } from "./TodoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Recolectar la piedra del Alma",
    done: false,
  },
  {
    id: new Date().getTime() + 3,
    description: "Recolectar la piedra del infinito",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return (
    <>

      <h1>TodoApp 10, <small>pendientes: 2</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group">

             {
                todos.map(todo => (

                    <li key={todo.id} className="list-group-item d-flex justify-content-between">
                    <span className="align-self-center"> {todo.description}</span>
                    <button className="btn btn-danger"> Borrar</button>
                </li>

                ))
             }

          </ul>
        </div>
        <div className="col-5">
<h4 className="text-center">Agregar TODO</h4>
<hr />
<form action="">
    <input type="text"
    placeholder="¿Qué hay que hacer?"
    className="form-control" />
    <div className="d-grid">
    <button 
    type="submit"
    className="btn btn-outline-primary mt-2">Agregar</button>
    </div>
</form>

        </div>
      </div>
    </>
  );
};
