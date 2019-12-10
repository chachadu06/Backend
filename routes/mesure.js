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

module.exports = router;