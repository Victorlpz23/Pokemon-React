const apiUrl = 'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json'

export function getPokemons() {
  return window.axios.get(apiUrl).then(r => r.data)
}

export function getPokemonImage(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}
