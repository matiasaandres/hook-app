import React, { useEffect } from "react";
import { useState } from "react";

export const FormWithCustomHook = () => {
  const [formState, setformState] = useState({
    username: "strider2",
    email: "matias@google.com",
    pass: "matias123",
  });

  const { username, email, pass } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setformState({
      ...formState,
      [name]: value,
    });
  }

  useEffect(()=>{
    //console.log('useEffect Called!');
  },
  [] // un arreglo vacio permite que el callback del useEfect se ejecute una vez cuando el componente se rederiza 
  );

  useEffect(
    () => {
    //  console.log("formState Change!");
    },
    [formState] // se dispara cuando el formState sufre un cambio
  );

  useEffect(
    () => {
      //console.log("email change!");
    },
    [email] // el useEffect se dispara cuando el email cambia
  );



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

      </div>
    </>
  );
};
