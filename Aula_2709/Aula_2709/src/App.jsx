import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EstouConseguindoAprenderReact from './componets/EstouConseguindoAprenderReact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <EstouConseguindoAprenderReact estouConseguindo={false}/>
     <EstouConseguindoAprenderReact/>
    </>
  );
}
export default App;
