class Thermostat {
  constructor() {
    this.temp = 20;
    this.powerSavingMode = true
  }

  getTemperature() {
    return this.temp;
  }

  up() {
    if (this.temp<25){
    this.temp++;
    }
    else if (this.powerSavingMode === false && this.temp < 32) {
      this.temp++;
    }
  }

  down() {
    if (this.temp > 10){
    this.temp--;
    }
  }

  reset() {
    this.temp = 20;
  }

  setPowerSavingMode(boolean) {
    this.powerSavingMode = boolean;
  }
};

module.exports = Thermostat;