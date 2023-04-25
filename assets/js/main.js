const pokemonList = document.getElementById("pokemonList")
const loadButton = document.getElementById("loadMore")
const limit = 5;
let offset = 0;


function convertPokemonHtml(pokemon) {
  return `
   <li class="pokemon ${pokemon.type}">
      <span class="number">#${pokemon.number}</span>
      <span class="name">${pokemon.name}</span> 
      <div class="datails">
        <ol class="types">
          ${pokemon.types
            .map((type) => `<li class="type ${type}">${type}</li>`)
            .join("")}
        </ol>
        <img
          src="${pokemon.photo}"
          alt="${pokemon.name}"
        />
      </div>
    </li>
  `
}

function loadItemsApi(offset, limit) {
  apiPoke.getPokemons(offset, limit).then((pokemons = []) => {
    const newList = pokemons.map(convertPokemonHtml).join("")
    pokemonList.innerHTML += newList
  })
}

loadItemsApi(offset, limit)

loadButton.addEventListener('click', () => {
  offset += limit
  loadItemsApi(offset, limit)
})
