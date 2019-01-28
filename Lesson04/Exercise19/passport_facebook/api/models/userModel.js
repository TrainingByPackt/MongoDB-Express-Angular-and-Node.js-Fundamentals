'use strict';
const mongoose = require("mongoose"),
Schema = mongoose.Schema;

const UserSchema = new Schema({
 
  facebook         : {
    fullName     : String,
    email        : String,
    createdOn: {
      type: Date,
      default: Date.now
    },
},
});

// UserSchema.methods.comparePassword = function(password){
//   return bcrypt.compareSync(password, this.hash_password);
// }

mongoose.model("User", UserSchema);
