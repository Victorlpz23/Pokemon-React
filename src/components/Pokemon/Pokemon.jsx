import React from 'react'

function Pokemon({ pokemon }) {
  return (
    <div className="card m-3 shadow">
        <div className="card-body">
          <h5 className="card-title mt-3">{pokemon.name.english}</h5>
          <img src={pokemon.image} alt="pokemonImage" style={{ width: 120 }}/>
          <div className='mt-3'><button className='rounded-pill'><img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Pokeball.PNG" style={{ width: 30 }} alt="pokeball" /></button></div>
        </div>
    </div>
  )
}

export default Pokemon

