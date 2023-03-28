import React, { useState } from 'react'

function Pokemon({ pokemon, getPokemonImage }) {
  const [isMyPokemon, setIsMyPokemon] = useState(pokemon.isMyPokemon);

  const handleClick = () => {
    pokemon.isMyPokemon = !isMyPokemon
    setIsMyPokemon(prev => !prev)
  }

  return (
    <div className="card m-3 shadow">
        <div className="card-body">
          <h5 className="card-title mt-3">{pokemon.name.english}</h5>
          <img src={getPokemonImage(pokemon.id)} alt="pokemonImage" style={{ width: 120 }}/>
          <div className='mt-3'>
          <button className={pokemon.isMyPokemon ? 'btn btn-danger' : 'btn btn-primary'} onClick={handleClick}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Pokeball.PNG" style={{ width: 30 }} alt="pokeball" />
          </button>
          </div>
        </div>
    </div>
  )
}

export default Pokemon

