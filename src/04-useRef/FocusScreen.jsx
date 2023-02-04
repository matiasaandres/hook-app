import React from "react";
import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    inputRef.current.select();
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center">Focus Screen</h1>
        <hr />

        <input
          ref={inputRef}
          type="text"
          name=""
          id=""
          placeholder="Ingrese su nombre"
          className="form-control"
        />
        <div className="text-center">
          <button className="btn btn-primary mt-3" onClick={onClick}>
            {" "}
            Set focus
          </button>
        </div>
      </div>
    </>
  );
};
