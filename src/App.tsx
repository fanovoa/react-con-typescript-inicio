import { Counter } from "./components/Counter";
import { Usuario } from "./components/Usuario";

import { TimerPadre } from "./components/TimerPadre";
import { ContadorRed } from "./components/ContadorRed";
import { Formulario } from "./components/Formulario";

import {Todo } from './todo/Todo';

function App() {

  return (
    <>
      <h1>React + TypeScript</h1>
      <hr />
      <h3>UseState</h3>
      <Counter />
      <Usuario />

      <h2>useEffect - useRef</h2>
      <hr />
      <TimerPadre />

      <h2>useReducer</h2>
      <hr />
      <ContadorRed />


      <h2>customHooks</h2>
      <hr />
      <Formulario />

      <hr />
      
      <Todo />
    </>
  )
}

export default App
