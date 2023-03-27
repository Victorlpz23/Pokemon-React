// import { useEffect, useState } from 'react';
import './App.css';
import PokemonList from './components/PokemonList/PokemonList';
import pokemonsData from './data/pokemons.json'
// import { getPokemons } from './services/PokemonService'



function App() {
  // const [pokemonsData, setPokemonsData] = useState([]);

  // useEffect(() => {
  //   getPokemons()
  //     .then(pokemons => setPokemonsData(pokemons)
  //     )
  // }, [])


  return (
    <div className="App">
      <PokemonList pokemons={pokemonsData}/>
    </div>
  );
}

export default App;
