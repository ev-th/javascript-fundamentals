const fetchPokemon = require('./api');

class Pokedex {
  constructor() {
    this.pokemon = [];
  }

  catch(pokemonName) {
    return fetchPokemon(pokemonName)
      .then((pokemon) => {
        this.pokemon.push(pokemon)
      })
  }

  all() {
    return this.pokemon;
  }
}

module.exports = Pokedex;