const express = require('express');

const router = express.Router();

const {
    talker,
    talkerId,
} = require('./routesHandlers/functions');

const { talkerLogin } = require('./routesHandlers/loginHandler');

router.get('/talker', talker);

router.get('/talker/:id', talkerId);

router.post('/login', talkerLogin);

module.exports = router;
