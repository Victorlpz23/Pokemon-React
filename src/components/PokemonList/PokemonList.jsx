import React from 'react'
import Pokemon from '../Pokemon/Pokemon'

function PokemonList({ pokemons, search, type }) {
  return (
    <div>
      {pokemons
        .filter(pokemon => pokemon.name.english.toLowerCase().includes(search.toLowerCase()))
        .filter(pokemon => type === 'All' ? true : pokemon.type.includes(type))
        .map(pokemon => (
          <Pokemon pokemon={pokemon} key={pokemon.id} />
        ))}
    </div>
  )
}


export default PokemonList