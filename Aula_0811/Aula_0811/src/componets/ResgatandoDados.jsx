import { useState, useEffect } from 'react'

const url = "http://localhost:3030/alunos"

const ResgatandoDados = () => {
  const [alunos, setAlunos] = useState([])

  useEffect(() => {
    async function fetchData() {

      const res = await fetch(url)
      const data = await res.json()

      setAlunos(data)
    }
    fetchData()
    },[])
  return (
    <>
      <p></p>
    </>
  );
}
export default ResgatandoDados;