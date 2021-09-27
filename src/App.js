import React, { useState, useEffect } from 'react';

/*Hook para utilizar os metodos de ciclo de vida dos componentes:
  useEffect:
    *Usado para DidMount
    *DidUptade
    *WillUnMount
*/
function App() {
  /** useState()
   * [state, setState] = useState(estado inicial);
   */
  const [repositorio, setRepositorio] = useState([]);

  //Equivale ao ComponentDidMount - executado apenas uma vez, na criação do componente
  //Muito utilizado para carregar dados de uma api
  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch('https://api.github.com/users/Iann-rst/repos');
      const data = await response.json();
      
    setRepositorio(data);
    }
    fetchData();

  }, []);

  //Equivale ao ComponentDidUpdate - disparar toda vez que a variável 'repositorio' mudar
  useEffect(()=>{
    const filtered = repositorio.filter(repo => repo.favorite);

    document.title = `Você tem ${filtered.length} favoritos`;
  }, [repositorio]);




  function handleFavorite(id){
    const novoRepositorio = repositorio.map(repo => {
      return repo.id === id ? {...repo, favorite: !repo.favorite} : repo
    })
    setRepositorio(novoRepositorio);
  }

  return (
    <> 
      <ul>
        {repositorio.map(repo => (
          <li key = {repo.id}>{repo.name}
          {repo.favorite && <span> (Favorito) </span>}
            <button onClick={() => handleFavorite(repo.id)}>Tornar Favorito</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
