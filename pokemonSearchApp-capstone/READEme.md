# Build a Pokémon Search App

In this project, you'll build an app that searches for Pokémon by name or ID and displays their details to the user. The Pokémon data and images will be retrieved using freeCodeCamp's PokéAPI Proxy.

## Objective

Build an app that is functionally similar to [Pokémon Search App](https://pokemon-search-app.freecodecamp.rocks).

## User Stories

- You should have an input element with an id of "search-input".
- You should have a button element with an id of "search-button".
- You should have an element with an id of "pokemon-name".
- You should have an element with an id of "pokemon-id".
- You should have an element with an id of "weight".
- You should have an element with an id of "height".
- You should have an element with an id of "types".
- You should have an element with an id of "hp".
- You should have an element with an id of "attack".
- You should have an element with an id of "defense".
- You should have an element with an id of "special-attack".
- You should have an element with an id of "special-defense".
- You should have an element with an id of "speed".

### Behavior Requirements:

1. When the `#search-input` element contains the value "Red" and the `#search-button` element is clicked, an alert should appear with the text "Pokémon not found".

2. When the `#search-input` element contains the value "Pikachu" and the `#search-button` element is clicked:

   - The values in the `#pokemon-name`, `#pokemon-id`, `#weight`, `#height`, `#hp`, `#attack`, `#defense`, `#special-attack`, `#special-defense`, and `#speed` elements should be:
     - Pokémon Name: Pikachu
     - Pokémon ID: #25 or 25
     - Weight: 60 or 60
     - Height: 4 or 4
     - HP: 35
     - Attack: 55
     - Defense: 40
     - Special Attack: 50
     - Special Defense: 50
     - Speed: 90
   - Add an `img` element with the id of "sprite" and the `src` set to the Pokémon's `front_default` sprite to the page.
   - The `#types` element should contain a single inner element with the value "ELECTRIC". Clear the `#types` element content between searches.

3. When the `#search-input` element contains the value "94" and the `#search-button` element is clicked:
   - The values in the `#pokemon-name`, `#pokemon-id`, `#weight`, `#height`, `#hp`, `#attack`, `#defense`, `#special-attack`, `#special-defense`, and `#speed` elements should be:
     - Pokémon Name: Gengar
     - Pokémon ID: #94 or 94
     - Weight: 405 or 405
     - Height: 15 or 15
     - HP: 60
     - Attack: 65
     - Defense: 60
     - Special Attack: 130
     - Special Defense: 75
     - Speed: 110
   - Add an `img` element with the id of "sprite" and the `src` set to the Pokémon's `front_default` sprite to the page.
   - The `#types` element should contain two inner elements with the text values "GHOST" and "POISON". Clear the `#types` element content between searches.

## Additional Notes

Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. Happy Coding!

**Note:** When running the tests, there may be a slight delay. Please wait a few seconds to allow the tests to finish. Do not refresh the page before they are done.

### When the #search-input element contains an invalid Pokemon name and the #search-button element is clicked, an alert should appear with the text "Pokémon not found".
