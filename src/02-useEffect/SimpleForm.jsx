import React, { useEffect } from "react";
import { useState } from "react";

export const SimpleForm = () => {
  const [formState, setformState] = useState({
    username: "strider",
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
    console.log('useEffrct Called!')
  });

  return (
    <>
      <div className="container">
        <h1 className="text-center">Formulario Simple</h1>
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
