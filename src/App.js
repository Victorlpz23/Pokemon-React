import { useEffect, useState } from 'react';
import './App.css';
import Pokemon from './components/Pokemon/Pokemon';
import { getPokemons } from './services/PokemonService'

function App() {
  const [pokemonsData, setPokemonsData] = useState([]);

  useEffect(() => {
    getPokemons()
      .then((pokemons) => setPokemonsData(pokemons))
  }, [])


  return (
    <div className="App">
      <Pokemon pokemon={pokemonsData} />
    </div>
  );
}

export default App;
