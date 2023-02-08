

const initialState = [{
    id:1,
    todo:'Recolectar la piedra del alma',
    done:false,
}];

const todoReducer = (state=initialState, action={}) =>{


    if(action.type === '[TODO] add todo' ){

        // no deberia realizar un push un reducer, por buenas pracxticas
        return [...state, action.payload]
    }


    return state;
}

let todos = todoReducer();

const newTodo = {
    id:2,
    todo:'Recolectar la piedra del poder',
    done:false
}


const addTodoAction = {
    type:'[TODO] add todo',
    payload: newTodo,

}

todos = todoReducer(todos, addTodoAction );

console.log({state:todos});


 