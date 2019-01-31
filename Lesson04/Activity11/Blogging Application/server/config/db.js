`javascript`
const mongoose = require("mongoose");
// var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://paulappz:asdfasdf@cluster0-0wi3e.mongodb.net/test?retryWrites=true";

  const options = {
    reconnectTries: Number.MAX_VALUE,
    poolSize: 10
  };

  mongoose.connect(uri, options).then(
    () => {
      console.log("Database connection established!");
    },
    err => {
      console.log("Error connecting Database instance due to: ", err);
    }
  );

//   MongoClient.connect(uri, options)
// .then((db) => {
//   //const collection = client.db('test');
//   // Insert some documents
//   // console.log('client is a typeof: ', typeof client + '\n')
//   accountsDb = db;
//   collection = accountsDb.db('test');
//  console.log('Successfully connected to MongoDB');
// })

// .catch((err) => {
//   console.log(err);
// });




// require any models

require("../api/models/Article");