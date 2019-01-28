// Load mongoose module 
const mongoose = require("mongoose");

// Declare a variable named uri and assign MongoDB connection string
var uri = "mongodb+srv://<username>:<password> @cluster0-0wi3e.mongodb.net/test?retryWrites=true";

// Declare a variable named option and assign optional settings

  const options = {
    reconnectTries: Number.MAX_VALUE,
    poolSize: 10
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
