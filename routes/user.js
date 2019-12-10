var express = require('express');
var router = express.Router();
var _ = require('lodash');
var user = require('../controllers/user.controller');

/* GET one user */
router.get('/:userId', (req, res) => {
    user.findOne(req, res);
    
});


/* DELETE  one user */

router.delete('/:userId', (req, res) => {
    user.delete(req, res);
    
});

/* update  one user */
router.post('/:userId', (req, res) => {
    user.update(req, res);
    
});

/* create  one user */
router.put('/', (req, res) => {
    user.create(req, res);
    
});
/* GET users listing. */
router.get('/', (req, res) => {
    user.findAll(req, res);
    
});

module.exports = router;