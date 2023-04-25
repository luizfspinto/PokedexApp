//Convertendo para lista HTML
function convertPokemonHtml(pokemon) {
  return `
   <li class="pokemon">
      <span class="number">#${pokemon.number}</span>
      <span class="name">${pokemon.name}</span> 
      <div class="datails">
        <ol class="types">
          ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join("")}
        </ol>
        <img
          src="${pokemon.photo}"
          alt="${pokemon.name}"
        />
      </div>
    </li>
  `
}

const pokemonList = document.getElementById("pokemonList")

apiPoke.getPokemons().then((pokemons = []) => {
  const newList = pokemons.map(convertPokemonHtml).join("")
  pokemonList.innerHTML += newList
})
