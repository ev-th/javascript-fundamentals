const fetchPokemon = require('./api')

describe('fetchPokemon', () => {
  it('returns a promise that resolves to a pokemon object', async () => {
    const pokemon = await fetchPokemon('charizard')
    expect(pokemon.name).toBe('charizard');
  })
})