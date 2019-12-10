const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
  location : String,
  personsInHouse : Number,
  houseSize : String,

  

  },
  {collection : "User"}
);

module.exports = mongoose.model('User', userSchema);
