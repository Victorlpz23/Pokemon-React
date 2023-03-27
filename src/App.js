import './App.css';
import Pokemon from './components/Pokemon/Pokemon';
import { getPokemons } from './services/PokemonService'

function App() {
  
  return (
    <div className="App">
    <Pokemon pokemon="Bulbasur"/>
    </div>
  );
}

export default App;
