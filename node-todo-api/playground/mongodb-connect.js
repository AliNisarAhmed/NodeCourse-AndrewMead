const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) { return console.log('unable to connect to MongoDB Server'); }
  console.log('Connected to MongoDB Server');

  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false,
  // }, (err, result) => {
  //   if (err) { return console.log('Unable to insert Todo', err) }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

  db.collection("Users").insertOne({
    name: 'Ali',
    age: 31,
    location: 'Karachi'
  }, (err, result) => {
    if (err) { return console.log(err) }
    console.log(JSON.stringify(result.ops, undefined, 2));
  })

  client.close();
});