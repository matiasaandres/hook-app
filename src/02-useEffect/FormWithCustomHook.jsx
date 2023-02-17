import React, { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm, username, email, pass } =
    useForm({
      username: "",
      email: "",
      pass: "",
    });

  //const {username,email,pass} = formState;

  return (
    <>
      <div className="container">
        <h1 className="text-center">Formulario con custom Hook</h1>
        <hr />

        <input
          type="text"
          placeholder="Username"
          className="form-control mt-2"
          name="username"
          onChange={onInputChange}
          value={username}
        />

        <input
          type="email"
          placeholder="Email"
          className="form-control mt-2"
          name="email"
          onChange={onInputChange}
          value={email}
        />

        <input
          type="password"
          placeholder="Pass"
          className="form-control mt-2"
          name="pass"
          onChange={onInputChange}
          value={pass}
        />

        <button className="btn btn-warning mt-2" onClick={onResetForm}>
          Borrar
        </button>
      </div>
    </>
  );
};
