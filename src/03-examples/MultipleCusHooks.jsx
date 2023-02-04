import React from "react";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

export const MultipleCusHooks = () => {

    const {counter, increment} = useCounter();

    const url = "https://api.breakingbadquotes.xyz/v1/quotes/"+counter;

    console.log(url);


  const { data, isLoading, hasError } = useFetch(url);



  // se desectruturamos de la siguiente forma, dado que el api entrega la data como un arreglo
  const{author,quote} = !!data&&data[0];  // si la data tiene valor, entoces toma la data en posición 0

  return (
    <>
      <h1>BreakingBad Qoutes</h1>
      <hr />

      {isLoading ? (
        <div className="text-center alert alert-info">Loading</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-1"> {quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button className="btn btn-primary" onClick={()=>increment(1)}> Next Quote</button>
    </>
  );
};
