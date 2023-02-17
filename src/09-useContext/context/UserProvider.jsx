import { UserContext } from "./UserContext";
import { useState } from "react";

 // const user = {
  //     id:123,
  //     name:'Matías Morales',
  //     email:'matias.andres.mh@gmail.com'
  // }
export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();

  return (
    // <UserContext.Provider value={{hola:'Mundo', user:user}}>
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  );
};
