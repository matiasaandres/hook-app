import { useCounter,useFetch } from "../hooks";
import { LoadingQuote, Quote} from "./";



export const MultipleCusHooks = () => {

    const {counter, increment} = useCounter(1);

    const url = `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`;
  
    const { data, isLoading, hasError } = useFetch(url);



  // se desectruturamos de la siguiente forma, dado que el api entrega la data como un arreglo
  const{author,quote} = !!data&&data[0];  // si la data tiene valor, entoces toma la data en posición 0

  return (
    <>
      <h1>BreakingBad Qoutes</h1>
      <hr />

      {isLoading ? <LoadingQuote/>
       : <Quote quote={quote} author={author}/>}

      <button className="btn btn-primary" disabled={isLoading} onClick={()=>increment(1)}> Next Quote</button>
    </>
  );
};
