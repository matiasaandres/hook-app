export const todoReducer = (initialState = [], action) => {
  
  //siempre debemos retornar un estado
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...initialState, action.payload];
    //{type: [todo remove], payload: id}
    case "[TODO] Remove Todo":
      return initialState.filter((todo) => todo.id !== action.payload);
    case "[TODO] Toggle Todo":
      return initialState.map(todo => {
        if(todo.id === action.payload){
          return {
            ...todo,
            //quiero la negacion del done
            done: !todo.done
          }
        }
        
        return todo;
      }); 

    default:
      return initialState;
  }
};
