const Pokedex = require('./pokedex');

describe('Pokedex', () => {
  const pokedex = new Pokedex();

  it('catches Pikachu and adds it to the pokedex', () => {
    return pokedex.catch('pikachu')
      .then((pokemon) => {
        expect(pokedex.all()[0]).toHaveProperty('name', 'pikachu')
      })
  })

  it('catches Jigglypuff and adds it to the pokedex after pikachu', async () => {
    await pokedex.catch('jigglypuff')
    expect(pokedex.all()[0]).toHaveProperty('name', 'pikachu')
    expect(pokedex.all()[1]).toHaveProperty('name', 'jigglypuff')
  })
})