import React from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description,
    }
    onNewTodo(newTodo);
    onResetForm();
  }

  return (
    <> 
      <h4 className="text-center">Agregar TODO</h4>
      <hr />
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="¿Qué hay que hacer?"
          className="form-control"
          name="description"
          value={description}
          onChange={onInputChange}
        />
        <div className="d-grid">
          <button type="submit" className="btn btn-outline-primary mt-2">
            Agregar
          </button>
        </div>
      </form>
    </>
  );
};
