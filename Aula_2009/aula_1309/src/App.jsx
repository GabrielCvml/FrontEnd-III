import Adicao from "./componets/Adicao"
import Divisao from "./componets/Divisao"
import Multiplicacao from "./componets/Multiplicacao"
import PrecisoEstudar from "./componets/PrecisoEstudar"
import Subtracao from "./componets/Subtracao"

function App() {

  return (
    <>
      <Adicao num1={2} num2={2} />
      <Subtracao num1={10} num2={2}/>
      <Multiplicacao num1={10} num2={7}/>
      <Divisao num1={10} num2={2} />
      <PrecisoEstudar nomeDaTecnologia={"JavaScript"}/>
    </>
  )
}

export default App
