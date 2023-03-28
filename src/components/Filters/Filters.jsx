import React from 'react'

function Filters({ onPokemonType, onShowMyPokemons }) {

  const handleChange = (event) => {
    const { value } = event.target
    onPokemonType(value)
  };



  return (
    <div>
      <div className='m-5'>
        <h5>My Pokemons</h5>
        <button className='rounded-pill' onClick={onShowMyPokemons}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Pokeball.PNG" style={{ width: 30 }} alt="pokeball" />
        </button>
      </div>
      <label htmlFor="">Types</label>
      <select id="" className="form-select" placeholder='Types' onChange={handleChange}>
        <option>All</option>
        <option>Grass</option>
        <option>Fire</option>
        <option>Water</option>
      </select>
    </div>
  )
}

export default Filters