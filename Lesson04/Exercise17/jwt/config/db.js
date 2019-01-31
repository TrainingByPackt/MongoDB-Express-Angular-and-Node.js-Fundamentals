/*Its assumed that you have already created a mongodb atlas cluster 
in previous exercise, Therefore, use the cluster credentials 
(username and password for mongodb atlas cluster) for this exercise */

//install mongodb using 'npm install mongoose'

// Load mongoose module 
const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);

// Declare a variable named uri and assign MongoDB connection string
var uri = "mongodb+srv://paulappz:asdfasdf@cluster0-0wi3e.mongodb.net/test?retryWrites=true";

// Declare a variable named option and assign optional settings

  const options = {
    reconnectTries: Number.MAX_VALUE,
    poolSize: 10,
    useNewUrlParser:true
  };

// Connect MongoDB Atlas using mongoose connect method
mongoose.connect(uri, options).then(
    () => {
      console.log("Database connection established!");
    },
    err => {
      console.log("Error connecting Database instance due to: ", err);
    }
  );
