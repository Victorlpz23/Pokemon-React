import React from 'react'
import Pokemon from '../Pokemon/Pokemon'

function PokemonList({ pokemons, search }) {
  return (
    <div>
      {pokemons
        .filter(pokemon => pokemon.name.english.toLowerCase().includes(search.toLowerCase()))
        .map(pokemon => (
          <Pokemon pokemon={pokemon} key={pokemon.id} />
        ))}
    </div>
  )
}


export default PokemonList