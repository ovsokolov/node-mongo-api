const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connect to MongoDb server');

  db.collection('Users').findOneAndUpdate(
    {
      _id: new ObjectID("586c1b461b3798d06504e63d")
    },
    {
      $set: {
        name: 'Oleg'
      },
      $inc: {
        age: 1
      }
    },
    {
      returnOriginal: false
    }
  ).then((result) => {
    console.log(result);
  });


  //db.close();
});
