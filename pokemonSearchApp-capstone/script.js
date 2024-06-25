const search = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const pokemonW = document.getElementById('weight');
const pokemonH = document.getElementById('height');
const pokemonT = document.getElementById('types');
const pokemonImage = document.getElementById('pokemon-image');

searchButton.addEventListener('click', async () => {
  const query = search.value.trim().toLowerCase();
  if (query === '') {
    alert('Please enter a Pokémon name or ID');
    return;
  } else if (query === 'Red') {
    alert('Pokémon not found');
  }

  try {
    const data = await getPokemon(query);
    if (data) {
      populatePokemonData(data);
    } else {
      throw new Error('Pokémon not found');
    }
  } catch (error) {
    alert('Pokémon not found');
  }
});

async function getPokemon(nameOrId) {
  const url = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${nameOrId}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Pokemon not found');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch Pokemon data');
  }
}

function populatePokemonData(data) {
  pokemonName.innerText = `Name: ${data.name.toUpperCase()}`;
  pokemonId.innerText = `ID: ${data.id}`;
  pokemonW.innerText = `Weight: ${data.weight}`;
  pokemonH.innerText = `Height: ${data.height}`;
  pokemonImage.src = data.sprites.front_default;
  pokemonImage.alt = data.name;

  pokemonT.innerHTML = '';
  const types = data.types.map((typeInfo) => typeInfo.type.name.toUpperCase());
  types.forEach((type) => {
    const typeElement = document.createElement('div');
    typeElement.textContent = type;
    pokemonT.appendChild(typeElement);
  });

  document.getElementById('hp').innerText = data.stats.find(
    (stat) => stat.stat.name === 'hp'
  ).base_stat;
  document.getElementById('attack').innerText = data.stats.find(
    (stat) => stat.stat.name === 'attack'
  ).base_stat;
  document.getElementById('defense').innerText = data.stats.find(
    (stat) => stat.stat.name === 'defense'
  ).base_stat;
  document.getElementById('special-attack').innerText = data.stats.find(
    (stat) => stat.stat.name === 'special-attack'
  ).base_stat;
  document.getElementById('special-defense').innerText = data.stats.find(
    (stat) => stat.stat.name === 'special-defense'
  ).base_stat;
  document.getElementById('speed').innerText = data.stats.find(
    (stat) => stat.stat.name === 'speed'
  ).base_stat;
}
