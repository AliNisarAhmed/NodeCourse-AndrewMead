// const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb')

const obj = new ObjectID();

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

  // db.collection("Todos").find({ 
  //   _id: new ObjectID("5be2e39b521b9b253d2825f7")  
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, null, 2));
  // }, (err) => {
  //   console.log('unable to fetch todos', err)
  // })

  db.collection("Users").find({name: "Kyle Simpson"}).toArray().then((docs) => {
    console.log('Documents');
    console.log(JSON.stringify(docs, null, 2));
  }, (err) => {
    console.log('unable to fetch todos', err)
  })

});