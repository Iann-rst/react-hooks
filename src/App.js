import React, { useState } from 'react';

function App() {
  const [repositorio, setRepositorio] = useState([
    { id:1, name: 'repo-1'},
    { id:2, name: 'repo-2'},
    { id:3, name: 'repo-3'},
  ]);

  function handleAddRepository(){
    setRepositorio([
      ...repositorio,
      {id: Math.random(), name: "Novo repo"}
    ]);
  }
  return (
    <> 
      <ul>
        {repositorio.map(repo => (
          <li key = {repo.id}>{repo.name}</li>
        ))}
      </ul>
      <button onClick={handleAddRepository}>Adicionar Repositório</button>
    </>
  );
}

export default App;
