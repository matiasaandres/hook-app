import React from "react";

export const TodoAdd = () => {




    



  return (
    <>
      <h4 className="text-center">Agregar TODO</h4>
      <hr />
      <form action="">
        <input
          type="text"
          placeholder="¿Qué hay que hacer?"
          className="form-control"
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
