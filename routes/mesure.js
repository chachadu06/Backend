var express = require('express');
var router = express.Router();
var _ = require('lodash');
const axios = require('axios').default;
var measure = require('../controllers/measure.controller');

/* GET one measure */
//router.get('/:measureId', measure.findOne);

/* DELETE  one measure */
//router.delete('/:measureId', measure.delete);
/* update  one measure */
//router.post('/:measureId', measure.update);

/* create  one measure */
router.put('/', measure.create);

/* GET measure listing. */
router.get('/', measure.findAll);

/* GET  pourcentage humidity*/
router.get('/hum', (req, res) => {
    measure.humidity(req, res);
    
});

/* GET  pourcentage humidity*/
router.get('/pol', (req, res) => {
    measure.pollution(req, res);
    
});

/* GET  pourcentage humidity*/
router.get('/temp', (req, res) => {
    measure.temperature(req, res);
    
});

router.get('/moytemp', (req, res) => {
    measure.moyennetemperature(req, res);
    
});
module.exports = router;