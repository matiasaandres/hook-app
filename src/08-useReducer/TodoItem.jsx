import React from "react";

export const TodoItem = ({ item, onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between"
      >
        <span onClick={()=> onToggleTodo(item.id)} 
      className={`align-self-center ${(item.done) ? 'text-decoration-line-through':''}`} >      
        {item.description}
        </span>
        <button className="btn btn-danger"
         onClick={()=> onDeleteTodo(item.id)}>
           Borrar</button>
      </li>
    </>
  );
};
