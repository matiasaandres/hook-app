import React from "react";
import { useState,useCallback } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback(
    (value) => {
        // mancamos un callback con el valor actual del counter (value)
        setCounter((c)=>c+value);
    },
    [],
  )
  

//   const incrementFather = ()=>{
//     setCounter(counter + 1);
//   }

  return (
    <>
      <h1> useCallback hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementFather} />
    </>
  );
};
