import { useState } from "react";
import React from 'react'


const HookContador = () => {

    const [count, setCount] = 
useState(1);
  return (
    <div>
        <h1>Contador com useState</h1>
        <button onClick={() => setCount( count + 1)}> Botão </button>
        <h1>O contador está em: {count}</h1>
    </div>
  );
}

export default HookContador;