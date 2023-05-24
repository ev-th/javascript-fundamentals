const Thermostat = require('./thermostat');

const thermostat = new Thermostat();

describe('Thermostat', () => {
  test('it has an initial temperature of 20 degrees', () => {
    expect(thermostat.getTemperature()).toBe(20);
  })

  test('can increase the temperature', () => {
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(22);
  })

  test('can decrease the temperature', () => {
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(21);
  })

  test('temperatures cannot get lower than 10', () => {
    let i= 10;
    while (i>0) {
      thermostat.down();
      i--;
    };
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(10);
  })

  test('temperatures cannot get lower than 10', () => {
    thermostat.reset()
    expect(thermostat.getTemperature()).toBe(20);
  })

  test('temperatures cannot get higher than 25 if power saving mode is on', () => {
    let i= 10;
    while (i>0) {
      thermostat.up();
      i--;
    };
    expect(thermostat.getTemperature()).toBe(25);
  })

  test('temperatures can get higher than 25 if power saving mode is off', () => {
    thermostat.reset()
    let i= 10;
    while (i>0) {
      thermostat.up();
      i--;
    };
    thermostat.setPowerSavingMode(false);
    thermostat.up()
    expect(thermostat.getTemperature()).toBe(26);
  })
  
  test('temperatures can get higher than 25 if power saving mode is off', () => {
    thermostat.reset()
    thermostat.setPowerSavingMode(false);
    let i= 15;
    while (i>0) {
      thermostat.up();
      i--;
    };
    expect(thermostat.getTemperature()).toBe(32);
  })
})