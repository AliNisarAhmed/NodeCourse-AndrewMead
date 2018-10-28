const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App 1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([
    {
      name: 'ali',
      age: 31
    },
    {
      name: 'sam',
      age: 31
    },
    {
      name: 'fahad',
      age: 32
    }
  ])
})

app.listen(3000, () => {
  console.log('server started');
});

module.exports.app = app;