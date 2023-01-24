import React from 'react';
import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const {counter,increment,decrement,resetCounter} = useCounter();
   

  return (
    <>
    <div className='container'>
    <h1 className='text-center'>Counter with Hook: {counter}</h1>

     <hr />
     <div className='text-center'>
     <button className='btn btn-primary' onClick={() => increment(2)}>+1</button>
     <button className='btn btn-primary' onClick={resetCounter}>Reset</button>
     <button className='btn btn-primary' onClick={() =>decrement(2)}>-1</button>
     </div>
     </div>
     </>
  )
}
