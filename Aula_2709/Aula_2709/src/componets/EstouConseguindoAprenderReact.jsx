import React from 'react'

const EstouConseguindoAprenderReact = (props) => {
    const estouConseguindo = props.estouConseguindo;
    
    const valor = estouConseguindo ? <h1>Estou indo bem…</h1> : <h1>Preciso estudar mais </h1>

  return (
    <div>{valor}</div>
  );
}
export default EstouConseguindoAprenderReact;