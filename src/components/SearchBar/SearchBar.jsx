import React from 'react'

function SearchBar({ search, onSearch }) {

  const handleOnChange = (event) => {
    const { value } = event.target
    onSearch(value)
  }

  return (
    <div className='pt-4'>
    <label className='me-3' htmlFor="">Search a Pokemon</label>
    <input className='rounded-3' type="text" onChange={handleOnChange} value={search} placeholder='Search...' ></input>
    </div>
  )
}

export default SearchBar