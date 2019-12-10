const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema(
    {
        
      creationDate: String,
            
      location: String,
            
    },
    {collection : "Sensor"}
    
  );
module.exports = mongoose.model('Sensor', sensorSchema);