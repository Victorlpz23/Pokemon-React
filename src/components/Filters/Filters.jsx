import React from 'react'

function Filters({ onPokemonType, onShowMyPokemons, pokemonsData }) {

  const handleChange = (event) => {
    const { value } = event.target
    onPokemonType(value)
  };


  const pokemonsTypes = Array.from(new Set(pokemonsData.flatMap(pokemon => pokemon.type)))



  return (
    <div>
      <div className='m-5'>
        <h5>My Pokemons</h5>
        <button className='btn' onClick={onShowMyPokemons}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Pokeball.PNG" style={{ width: 30 }} alt="pokeball" />
        </button>
      </div>
      <label htmlFor="">Types</label>
      <select id="" className="form-select" placeholder='Types' onChange={handleChange}>
        <option>All</option>
        {pokemonsTypes.map( x => <option key={x}>{x}</option>) }
      </select>
    </div>
  )
}

export default Filters