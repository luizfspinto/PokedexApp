const apiPoke = {} //Objeto global

function convertPokeApiDetails(pokeDetails) {
  const pokemon = new Pokemon()
  pokemon.name = pokeDetails.name
  pokemon.number = pokeDetails.id
  const types = pokeDetails.types.map((typeSlote) => typeSlote.type.name)
  const [type] = types

  pokemon.types = types
  pokemon.type = type

  pokemon.photo = pokeDetails.sprites.other.dream_world.front_default
  return pokemon
}

apiPoke.getPokeDetails = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetails)
}

apiPoke.getPokemons = (offset = 0, limit = 5) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(apiPoke.getPokeDetails))
    .then((detailsRequest) => Promise.all(detailsRequest))
    .then((pokemonDetails) => pokemonDetails)
}
