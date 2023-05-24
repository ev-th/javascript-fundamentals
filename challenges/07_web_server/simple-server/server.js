const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!')
});

let counter = 0

app.post('/counter', (req, res) => {
  counter++
  res.send('Got a POST request')
});

app.get('/counter', (req, res) => {
  res.send(`Counter: ${counter}`)
});

app.delete('/counter', (req, res) => {
  counter = 0
  res.send('Got a DELETE request to reset the counter.')
});

console.log(`Server listening on localhost:${port}`);
app.listen(port);