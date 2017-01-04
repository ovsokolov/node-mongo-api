const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connect to MongoDb server');

  //delete many
  // db.collection('Users').deleteMany({name: 'Inna'})
  //   .then((result) => {
  //     console.log(result);
  //   });

  //delete one
  db.collection('Users').deleteOne({
    _id: new ObjectID("586c491af5ad268935ec916b")
  }).then((result) => {
      console.log(result);
  });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false})
  //   .then((result) => {
  //     console.log(result);
  //   });


  //db.close();
});
