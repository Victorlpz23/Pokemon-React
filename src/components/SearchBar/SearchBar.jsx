import React from 'react'

function SearchBar({ search, onSearch }) {

  const handleOnChange = (event) => {
    const { value } = event.target
    onSearch(value)
  }

  return (
    <div className='m-3'>
    <label htmlFor="">Search a Pokemon</label>
    <input type="text" onChange={handleOnChange} value={search} placeholder='Search...' ></input>
    </div>
  )
}

export default SearchBar