const Thermostat = require('./thermostat')

const thermostat = new Thermostat();

describe('Thermostat', () => {
  test('it has an initial temperature of 20 degrees', () => {
    expect(thermostat.getTemperature()).toBe(20);
  })

  test('it has an initial temperature of 20 degrees then increases by 1', () => {
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(22);
  })
  
  test('it can decrease the temperature by 1', () => {
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(21);
  })


})