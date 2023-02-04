import React from 'react'
import { useState } from 'react';

export const useForm = (initialForm={}) => {



    // {
    //     username: "strider2",
    //     email: "matias@google.com",
    //     pass: "matias123",
    //   }

    const [formState, setformState] = useState(initialForm);
    
    
      const onInputChange = ({ target }) => {
        const { name, value } = target;
        setformState({
          ...formState,
          [name]: value,
        });
      }

      const onResetForm =() =>{
  setformState(initialForm);
      }

return{
...formState,
formState,
onInputChange,
onResetForm

}


}
