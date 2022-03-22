const express = require('express');

const router = express.Router();

const { talker } = require('./routesHandlers/talker');
const { talkerId } = require('./routesHandlers/talkerId');
const { talkerLogin } = require('./routesHandlers/login');
// const { postTalker } = require('./routesHandlers/postTalker');

router.get('/talker', talker);

router.get('/talker/:id', talkerId);

router.post('/login', talkerLogin);

// router.post('/talker', postTalker);

module.exports = router;
