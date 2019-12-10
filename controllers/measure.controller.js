const Measure = require('../models/measure.model.js');
const Measure1 = require('../models/measure.model.js');
// Retrieve and return all measure from the database.
exports.findAll = (req, res) => {
  Measure.find()
    .then(Measure => {
      
      res.status(200).json({Measure});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving sensor.'
      });
    });
};


// Create and Save a new measure
exports.create = (req, res) => {
  // Validate request
  if (!req.body.type) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'type can not be empty'
    });
  }

  if (!req.body.creationDate) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'creationDate can not be empty'
    });
  }

  if (!req.body.sensorID) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'sensorID can not be empty'
    });
  }

  if (!req.body.value) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'value can not be empty'
    });
  }

  // Create a new User
  const Measure = new Measure({
    type: req.body.type,
    creationDate: req.body.creationDate,
    sensorID : req.body.sensorID,
    value : req.body.value
    });

  // Save User in the database
  Measure
    .save()
    .then(data => {
      // we wait for insertion to be complete and we send the newly user integrated
      res.send(data);
    })
    .catch(err => {
      // In case of error during insertion of a new user in database we send an
      // appropriate message
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Sensor.'
      });
    });
}; 

//trouver le nb d'humide
exports.humidity = (req, res) => {
  Measure.find({"type": "humidity"}).count()
    .then(Measure => {
      
      res.status(200).json({Measure});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving sensor.'
      });
    });
    
};

//trouver le nb airpollution
exports.pollution = (req, res) => {
  Measure.find({"type": "airPollution"}).count()
    .then(Measure => {
      
      res.status(200).json({Measure});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving sensor.'
      });
    });
    
};

//trouver le nb temperature
exports.temperature = (req, res) => {
  Measure.find({"type": "temperature"}).count()
    .then(Measure => {
      
      res.status(200).json({Measure});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving sensor.'
      });
    });
    
};

exports.moyennetemperature = (req, res) => {
  Measure.find({"type": "temperature"},{"value":1,"_id":0})
    .then(Measure => {
      let compteur=0;
      Measure.forEach(element =>{
          compteur+=element.value;

      })
      const moyenne=compteur/Measure.length;
      res.status(200).json({moyenne});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving sensor.'
      });
    });
    
};