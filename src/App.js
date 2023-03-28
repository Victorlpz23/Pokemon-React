import { useState, useEffect } from 'react';
import './App.css';
import Filters from './components/Filters/Filters';
import PokemonList from './components/PokemonList/PokemonList';
import SearchBar from './components/SearchBar/SearchBar';
// import pokemonsData from './data/pokemons.json'
import { getPokemons, getPokemonImage } from './services/PokemonService'




function App() {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [search, setSearch] = useState('')
  const [type, setType] = useState('All')
  const [showMyPokemons, setShowMyPokemons] = useState(false)

  useEffect(() => {
    getPokemons()
      .then(pokemons => setPokemonsData(pokemons)
      )
  }, [])

  const handleSearch = (textInput) => {
    setSearch(textInput)
  }

  const handlePokemonType = (pokemonType) => {
    setType(pokemonType)
  }

  const onShowMyPokemons = () => {
    setShowMyPokemons(!showMyPokemons)
  }


  return (
    <div className="App">
      <SearchBar search={search} onSearch={handleSearch} />
      <Filters onPokemonType={handlePokemonType} onShowMyPokemons={onShowMyPokemons} pokemonsData={pokemonsData} />
      <PokemonList pokemons={pokemonsData} search={search} type={type} showMyPokemons={showMyPokemons} getPokemonImage={getPokemonImage} />
    </div>
  );
}

export default App;
