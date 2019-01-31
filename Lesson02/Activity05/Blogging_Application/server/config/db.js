<<<<<<< HEAD
/*Its assumed that you have already created a mongodb atlas cluster 
in previous exercise, Therefore, use the cluster credentials 
(username and password for mongodb atlas cluster) for this exercise */

//install mongodb using 'npm install mongoose'

// Load mongoose module 
const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);

// Declare a variable named uri and assign MongoDB connection string
var uri = "mongodb+srv://<username>:<password> @cluster0-0wi3e.mongodb.net/test?retryWrites=true";

// Declare a variable named option and assign optional settings

  const options = {
    reconnectTries: Number.MAX_VALUE,
    poolSize: 10,
    useNewUrlParser:true
  };

// Connect MongoDB Atlas using mongoose connect method
mongoose.connect(uri, options).then(
=======
`javascript`
const mongoose = require("mongoose");
// var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://paulappz:asdfasdf@cluster0-0wi3e.mongodb.net/test?retryWrites=true";

  const options = {
    reconnectTries: Number.MAX_VALUE,
    poolSize: 10
  };

  mongoose.connect(uri, options).then(
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc
    () => {
      console.log("Database connection established!");
    },
    err => {
      console.log("Error connecting Database instance due to: ", err);
    }
  );
<<<<<<< HEAD
=======

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
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc
