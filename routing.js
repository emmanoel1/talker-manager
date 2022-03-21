const express = require('express');

const router = express.Router();

const {
    talker,
    talkerId,
} = require('./routesHandlers/functions');

router.get('/talker', talker);

router.get('/talker/:id', talkerId);

module.exports = router;
