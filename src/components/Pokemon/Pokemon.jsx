import React from 'react'

function Pokemon({ pokemon }) {
  console.log(pokemon[0].name.english)
  return (
    <div>Pokemon {pokemon[0].name.english}</div>
  )
}

export default Pokemon