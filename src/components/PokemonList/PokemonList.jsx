import React from 'react'
import Pokemon from '../Pokemon/Pokemon'

function PokemonList({ pokemons, search, type, showMyPokemons, getPokemonImage }) {
  return (
    <div>
      {pokemons
        .filter(pokemon => pokemon.name.english.toLowerCase().includes(search.toLowerCase()))
        .filter(pokemon => type === 'All' ? true : pokemon.type.includes(type))
        .filter(pokemon => showMyPokemons === false || pokemon.isMyPokemon )
        .map(pokemon => ( 
          <Pokemon pokemon={pokemon} key={pokemon.id} getPokemonImage={getPokemonImage}/>
        ))}
    </div>
  )
}


export default PokemonList