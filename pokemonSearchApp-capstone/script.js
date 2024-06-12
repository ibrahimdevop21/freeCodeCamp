const search = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
let pokemonName = document.getElementById('pokemon-name');
let pokemonId = document.getElementById('pokemon-id');
let pokemonW = document.getElementById('weight');
let pokemonH = document.getElementById('height');
let pokemonT = document.getElementById('types');

// Correct the typo in getElementById
let pokemonTypes = document.getElementById('types');

// Add event listener to the search button
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

  const data = await getPokemon(query);
  if (data) {
    // Populate data into the page
    populatePokemonData(data);
  } else {
    alert('Pokémon not found');
  }
});

// Async function to fetch Pokémon data
async function getPokemon(nameOrId) {
  try {
    const url = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${nameOrId}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Something went wrong: ' + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem getting the data', error);
    return null;
  }
}

// Function to populate the page with Pokémon data
function populatePokemonData(data) {
  pokemonName.innerText = `Name: ${data.name}`;
  pokemonId.innerText = `ID: ${data.id}`;
  pokemonW.innerText = `Weight: ${data.weight}`;
  pokemonH.innerText = `Height: ${data.height}`;

  const types = data.types.map((typeInfo) => typeInfo.type.name).join(', ');
  pokemonTypes.innerText = `Types: ${types}`;

  const stats = data.stats.reduce((acc, stat) => {
    acc[stat.stat.name] = stat.base_stat;
    return acc;
  }, {});

  const table = document.querySelector('table');
  table.rows[1].cells[1].innerText = stats.hp;
  table.rows[2].cells[1].innerText = stats.attack;
  table.rows[3].cells[1].innerText = stats.defense;
  table.rows[4].cells[1].innerText = stats['special-attack'];
  table.rows[5].cells[1].innerText = stats['special-defense'];
  table.rows[6].cells[1].innerText = stats.speed;
}
