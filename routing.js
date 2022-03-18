const express = require('express');

const router = express.Router();

const {
    talker,
} = require('./routesHandlers/functions');

router.get('/talker', talker);

module.exports = router;
