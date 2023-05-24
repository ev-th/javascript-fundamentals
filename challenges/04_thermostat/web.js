// Implement a route GET /temperature to print the thermostat temperature.
// Implement a route POST /up to increase the temperature.
// Implement a route POST /down to decrease the temperature.
// Implement a route DELETE /temperature to reset the thermostat.
const express = require('express');
const app = express();
const port = 3000;
const Thermostat = require('./thermostat');

const thermostat = new Thermostat;

app.get('/temperature', (req, res) => {
  const temperature = {'temperature': thermostat.getTemperature()};
  res.send(JSON.stringify(temperature));
})

app.post('/up', (req, res) => {
  res.send(
    thermostat.up()
  )
})

app.post('/down', (req, res) => {
  res.send(
    thermostat.down()
  )
})

app.delete('/temperature', (req, res) => {
  res.send(
    thermostat.reset()
  )
})

console.log(`Server listening on localhost:${port}`);
app.listen(port);