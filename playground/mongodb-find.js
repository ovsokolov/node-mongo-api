const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connect to MongoDb server');

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: "Inna"}).toArray().then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });


  //db.close();
});
