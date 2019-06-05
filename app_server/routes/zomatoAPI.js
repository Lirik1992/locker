var express = require('express');
var router = express.Router();
var ctrlCities = require('../controller/zomatoApi');

router.get('/cities', ctrlCities.getCities);

module.exports = router;