import { useState } from 'react'
import './App.css'
import HookContador from './componets/HookContador'
import RenderizandoComFuncoes from './componets/RenderizandoComFuncoes'
import TrabalhandoComImagens from './componets/TrabalhandoComImagens'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RenderizandoComFuncoes/>
      <HookContador/>
    </>
  )
}

export default App
 