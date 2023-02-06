
import { useState, useMemo } from 'react';
import { useCounter } from '../hooks'

const heavyStuuf = (iterationNumber = 100)=>{

  for(let i = 0; i< iterationNumber; i++){

    console.log('Ahí vamos...');
  }
 return `${iterationNumber} iteraciones realizadas`;
}

export const MemoHook = () => {

const {counter, increment} = useCounter(4000);
const [show,setShow] = useState(true);

const memorizedValue = useMemo(()=>heavyStuuf(counter), [counter] );

  return (
    <>
    
    <h1>Counter <small>{counter}</small></h1>
    <hr />
    <h4>{memorizedValue}</h4>
    <button className='btn btn-primary' onClick={()=>increment(1)}> +1</button>
   
   <button className='btn btn-outline-primary' onClick={()=>setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
    </>
  )
}
