import {  useState } from 'react';
import './App.css';
import PokemonList from './components/PokemonList/PokemonList';
import SearchBar from './components/SearchBar/SearchBar';
import pokemonsData from './data/pokemons.json'
// import { getPokemons } from './services/PokemonService'



function App() {
  // const [pokemonsData, setPokemonsData] = useState([]);
  const [search, setSearch] = useState ('')

  // useEffect(() => {
  //   getPokemons()
  //     .then(pokemons => setPokemonsData(pokemons)
  //     )
  // }, [])

  const handleSearch = (textInput) => {
    setSearch(textInput)
    console.log(textInput)
  }


  return (
    <div className="App">
      <SearchBar search={search} onSearch={handleSearch}/>
      <PokemonList pokemons={pokemonsData} search={search}/>
    </div>
  );
}

export default App;
