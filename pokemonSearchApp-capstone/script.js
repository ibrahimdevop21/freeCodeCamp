const search = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const pokemonW = document.getElementById('weight');
const pokemonH = document.getElementById('height');
const pokemonT = document.getElementById('types');
const pokemonImage = document.getElementById('sprite');

searchButton.addEventListener('click', async () => {
  const query = search.value.trim().toLowerCase();
  if (query === '') {
    alert('Please enter a Pokémon name or ID');
    return;
  }

  if (query === 'red') {
    alert('Pokémon not found');
    return;
  }

  try {
    const data = await getPokemon(query);
    if (data) {
      // Populate data into the page
      populatePokemonData(data);
    } else {
      alert('Pokémon not found');
    }
  } catch (error) {
    alert(
      'An error occurred while fetching Pokémon data. Please try again later.'
    );
  }
});

// Async function to fetch Pokémon data
async function getPokemon(nameOrId) {
  const url = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${nameOrId}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Something went wrong: ' + response.statusText);
  }
  const data = await response.json();
  return data;
}

function populatePokemonData(data) {
  pokemonName.innerText = `Name: ${data.name.toUpperCase()}`;
  pokemonId.innerText = `ID: ${data.id}`;
  pokemonW.innerText = `Weight: ${data.weight}`;
  pokemonH.innerText = `Height: ${data.height}`;
  pokemonImage.src = data.sprites.front_default;
  pokemonImage.alt = data.name;

  const types = data.types
    .map((typeInfo) => typeInfo.type.name.toUpperCase())
    .join(', ');
  pokemonT.innerHTML = `Types: ${types}`;

  const stats = data.stats.reduce((acc, stat) => {
    acc[stat.stat.name] = stat.base_stat;
    return acc;
  }, {});

  document.getElementById('hp').innerText = stats.hp;
  document.getElementById('attack').innerText = stats.attack;
  document.getElementById('defense').innerText = stats.defense;
  document.getElementById('special-attack').innerText = stats['special-attack'];
  document.getElementById('special-defense').innerText =
    stats['special-defense'];
  document.getElementById('speed').innerText = stats.speed;
}
