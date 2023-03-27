// import { useEffect, useState } from 'react';
import './App.css';
import PokemonList from './components/PokemonList/PokemonList';
import SearchBar from './components/SearchBar/SearchBar';
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
      <SearchBar />
      <PokemonList pokemons={pokemonsData}/>
    </div>
  );
}

export default App;
