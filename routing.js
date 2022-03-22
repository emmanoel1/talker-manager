const express = require('express');

const router = express.Router();

const { talker } = require('./endpointHandlers/talker');
const { talkerId } = require('./endpointHandlers/talkerId');
const { talkerLogin } = require('./endpointHandlers/login');
// const { postTalker } = require('./endpointHandlers/postTalker');

router.get('/talker', talker);

router.get('/talker/:id', talkerId);

router.post('/login', talkerLogin);

// router.post('/talker', postTalker);

module.exports = router;
