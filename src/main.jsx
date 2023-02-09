import React from "react";
import ReactDOM  from "react-dom/client";
import { CallbackHook } from "./06-memo/CallbackHook";
//import { Padre } from "./07-tarea-memo/Padre";
//import { MemoHook } from "./06-memo/MemoHook";
//import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
//import { HooksApp } from "./HooksApp";
//import { CounterApp } from "./01-useState/CounterApp";
//import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
//import { SimpleForm } from "./02-useEffect/SimpleForm";
//import { MultipleCusHooks } from "./03-examples/MultipleCusHooks";
//import { FocusScreen } from "./04-useRef/FocusScreen";
//import { Layout } from "./05-useLayoutEffect/Layout";
//import { Memorize } from "./06-memo/Memorize";
import { TodoApp } from "./08-useReducer/TodoApp";
//import './08-useReducer/intro-reducer';

import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
//   // <React.StrictMode>
   <TodoApp/>
//    //</React.StrictMode> 
);