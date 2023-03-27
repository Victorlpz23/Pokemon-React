import React from 'react'

function Pokemon({ pokemon }) {
  return (
    <div className="card m-3">
        <div className="card-body">
          <h5 className="card-title">{pokemon.name.english}</h5>
          <button><img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Pokeball.PNG" style={{ width: 30 }} alt="pokeball" /></button>
        </div>
    </div>
  )
}

export default Pokemon

