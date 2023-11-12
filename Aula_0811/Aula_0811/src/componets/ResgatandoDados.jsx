import React from 'react'
import { useState, useEffect } from 'react';

const url = "http://localhost:3000/alunos"

const ResgatandoDados = () => {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();

      setAlunos(data);
    }
    fetchData();
    },[])
  return (
    <>
      <h5>Lista de alunos</h5>
      <table>
        <thead>
          <tr>
            <th>Matrícula</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Curso</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((a) => (
            <tr>
              <th style={{padding:10}} >{a.id}</th>
              <th style={{padding:10}}>{a.nome}</th>
              <th style={{padding:10}}>{a.email}</th>
              <th style={{padding:10}}>{a.curso}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default ResgatandoDados;