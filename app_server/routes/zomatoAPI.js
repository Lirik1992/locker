var express = require('express');
var router = express.Router();
var ctrlCities = require('../controller/zomatoApi');

router.get('/cities', ctrlCities.getCities);
router.get('/search', ctrlCities.search);

module.exports = router;