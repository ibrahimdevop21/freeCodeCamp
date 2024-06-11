const search = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
let pokemonName = document.getElementById('pokemon-name');
let pokemonId = document.getElementById('pokemon-id');
let pokemonW = document.getElementById('weight');
let pokemonH = document.getElementById('height');
let pokemonT = document.getElmentById('types');
searchButton.addEventListener('click', () => {
  if (search === 'Red') {
    return 'Pokemon not found';
  }
});
