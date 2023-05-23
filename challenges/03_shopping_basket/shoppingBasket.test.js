const ShoppingBasket = require('./shoppingBasket');

describe('ShoppingBasket', () => {
  it('has a total price of 0 when initialized', () => {
    const basket = new ShoppingBasket();
    expect(basket.getTotalPrice()).toBe(0);
  })

  it('has an updated price when an item is added', () => {
    const basket = new ShoppingBasket();

    const mockCandy = {
      getName: () => 'Mars',
      getPrice: () => 4.99
    }
    basket.addItem(mockCandy)
    
    expect(basket.getTotalPrice()).toBe(4.99);
  })

  it('adds up all the prices together to get the total price', () => {
    const basket = new ShoppingBasket();

    const mockMars = {
      getName: () => 'Mars',
      getPrice: () => 4.99
    }

    const mockSkittle = {
      getName: () => 'Skittle',
      getPrice: () => 3.99
    }
    basket.addItem(mockMars)
    basket.addItem(mockSkittle)
    basket.addItem(mockSkittle)

    expect(basket.getTotalPrice()).toBe(12.97);
  })
})