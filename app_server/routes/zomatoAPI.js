var express = require('express');
var router = express.Router();
var ctrlCities = require('../controller/cities');

router.get('/cities', ctrlCities.getCities);

module.exports = router;