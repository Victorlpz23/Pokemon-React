import {  useState } from 'react';
import './App.css';
import Filters from './components/Filters/Filters';
import PokemonList from './components/PokemonList/PokemonList';
import SearchBar from './components/SearchBar/SearchBar';
import pokemonsData from './data/pokemons.json'
// import { getPokemons } from './services/PokemonService'



function App() {
  // const [pokemonsData, setPokemonsData] = useState([]);
  const [search, setSearch] = useState ('')
  const [type, setType] = useState('All')

  // useEffect(() => {
  //   getPokemons()
  //     .then(pokemons => setPokemonsData(pokemons)
  //     )
  // }, [])

  const handleSearch = (textInput) => {
    setSearch(textInput)
  }

  const handlePokemonType = (pokemonType) => {
    setType(pokemonType)
  }




  return (
    <div className="App">
      <SearchBar search={search} onSearch={handleSearch}/>
      <Filters   onPokemonType={handlePokemonType} />
      <PokemonList pokemons={pokemonsData} search={search} type={type}/>
    </div>
  );
}

export default App;
