const express = require('express');

const router = express.Router();

const { talker } = require('./endpointHandlers/talker');
const { talkerId } = require('./endpointHandlers/talkerId');
const { talkerLogin } = require('./endpointHandlers/login');

const talkerAuth = require('./middlewares/talkerAuth');
const talkerName = require('./middlewares/talkerName');
const talkerAge = require('./middlewares/talkerAge');
const talkerData = require('./middlewares/talkerData');
const talkerSend = require('./middlewares/talkerSend');

router.get('/talker', talker);

router.get('/talker/:id', talkerId);

router.post('/login', talkerLogin);

router.post('/talker', talkerAuth, talkerName, talkerAge, talkerData, talkerSend);

module.exports = router;
