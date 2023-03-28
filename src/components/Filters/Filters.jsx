import React from 'react'

function Filters({ pokemonType, myPokemons, onPokemonType }) {

  const handleChange = (event) => {
    const { value } = event.target
      onPokemonType(value)
  }
  

  return (
    <div>
      <label htmlFor="">Types</label>
      <select id="" className="form-select" placeholder='Types' onChange={handleChange}>
        <option >All</option>
        <option >Grass</option>
        <option>Fire</option>
        <option>Water</option>
      </select>
    </div>
  )
}

export default Filters