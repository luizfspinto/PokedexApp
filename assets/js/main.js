//Convertendo para lista HTML
function convertPokemonHtml(pokemon) {
  return `
   <li class="pokemon">
      <span class="number">#001</span>
      <span class="name">${pokemon.name}</span> 
      <div class="datails">
        <ol class="types">
          <li class="type">Grass</li>
          <li class="type">Poison</li>
        </ol>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
          alt="${pokemon.name}"
        />
      </div>
    </li>
  `
}

const pokemonList = document.getElementById("pokemonList")

apiPoke.getPokemons().then((pokemons = []) => {
  const newList = pokemons.map((pokemon) => convertPokemonHtml(pokemon))
  const newHTML = newList.join("")
  pokemonList.innerHTML += newHTML
})
