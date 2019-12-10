const User = require('../models/user.model.js');

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.location) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'location can not be empty'
    });
  }
  if (!req.body.personsInHouse) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'personsInHouse can not be empty'
    });
  }

  if (!req.body.houseSize) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'houseSize can not be empty'
    });
  }

  // Create a new User
  const user = new User({
    location: req.body.location,
    personsInHouse: req.body.personsInHouse,
    houseSize: req.body.houseSize|| ''
  });

  // Save User in the database
  user
    .save()
    .then(data => {
      // we wait for insertion to be complete and we send the newly user integrated
      res.send(data);
    })
    .catch(err => {
      // In case of error during insertion of a new user in database we send an
      // appropriate message
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the User.'
      });
    });
};

// Retrieve and return all Users from the database.
exports.findAll = (req, res) => {
  
  User.find()
    .then(User => {
      
      res.status(200).json({User});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      });
    });
};

// Find a single User with a UserId
exports.findOne = (req, res) => {
  User.findById(req.params.userId)
    .then(User => {
      if (!User) {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.userId
        });
      }
      res.status(200).json({User});
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.userId
        });
      }
      return res.status(500).send({
        message: 'Error retrieving user with id ' + req.params.userId
      });
    });
};

// Update a User identified by the UserId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.userId) {
    return res.status(400).send({
      message: 'userId can not be empty'
    });
  }

  // Find user and update it with the request body
  console.log(newUser);
  User.findByIdAndUpdate(
    req.params.userId,
    {
        location: req.body.location,
        personsInHouse: req.body.personsInHouse,
        houseSize: req.body.houseSize || ''
    },
    { new: true }
  )
    .then(user => {
      console.log(user);
      if (!user) {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.userId
        });
      }
      res.status(200).json({User});
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.userId
        });
      }
      return res.status(500).send({
        message: 'Error updating user with id ' + req.params.userId
      });
    });
};

// Delete a User with the specified UserId in the request
exports.delete = (req, res) => {
  User.findByIdAndRemove(req.params.userId)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.userId
        });
      }
      res.send({ message: 'User deleted successfully!' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.userId
        });
      }
      return res.status(500).send({
        message: 'Could not delete user with id ' + req.params.userId
      });
    });
};

// nombre d'utilisateur en china
exports.uchina = (req, res) => {
  
  User.find({"location": "china"}).count()
    .then(User => {
      
      res.status(200).json({User});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      });
    });
};

// nombre d'utilisateur en russia
exports.urussia = (req, res) => {
  
  User.find({"location": "russia"}).count()
    .then(User => {
      
      res.status(200).json({User});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      });
    });
};
// nombre d'utilisateur en poland
exports.upoland = (req, res) => {
  
  User.find({"location": "poland"}).count()
    .then(User => {
      
      res.status(200).json({User});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      });
    });
};
// nombre d'utilisateur en italy
exports.uitaly = (req, res) => {
  
  User.find({"location": "italy"}).count()
    .then(User => {
      
      res.status(200).json({User});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      });
    });
};

// nombre d'utilisateur en greece
exports.ugreece = (req, res) => {
  
  User.find({"location": "greece"}).count()
    .then(User => {
      
      res.status(200).json({User});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      });
    });
};

// nombre d'utilisateur en ecuador
exports.uecuador = (req, res) => {
  
  User.find({"location": "ecuador"}).count()
    .then(User => {
      
      res.status(200).json({User});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      });
    });
};

// nombre d'utilisateur au mexique
exports.umexico = (req, res) => {
  
  User.find({"location": "mexico"}).count()
    .then(User => {
      
      res.status(200).json({User});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      });
    });
};