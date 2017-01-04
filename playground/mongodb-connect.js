const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connect to MongoDb server');

  db.collection('Users').insertOne({
    name: 'Oleg',
    age: 43,
    location: 'Staten Island'
  }, (err, result) => {
    if(err){
      return console.log('Unable to insert into users');
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});
