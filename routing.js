const express = require('express');

const router = express.Router();

const functions = require('./routesHandlers/functions');

router.get('/talker', functions.talker);

module.exports = router;
