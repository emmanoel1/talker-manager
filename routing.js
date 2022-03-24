const express = require('express');

const router = express.Router();

const talker = require('./endpointHandlers/talker');
const talkerId = require('./endpointHandlers/talkerId');
const talkerLogin = require('./endpointHandlers/login');

const talkerAuth = require('./middlewares/talkerAuth');
const talkerName = require('./middlewares/talkerName');
const talkerAge = require('./middlewares/talkerAge');
const talkerData = require('./middlewares/talkerData');
const talkerSend = require('./middlewares/talkerSend');

// const putTalkerId = require('./endpointHandlers/putTalkerId');
const deleteTalkerId = require('./endpointHandlers/deleteTalkerId');

router.get('/talker', talker);

router.get('/talker/:id', talkerId);

router.post('/login', talkerLogin);

router.post('/talker', talkerAuth, talkerName, talkerAge, talkerData, talkerSend);

// router.put('/talker/:id', talkerAuth, talkerName, talkerAge, talkerData, putTalkerId);

router.delete('/talker/:id', talkerAuth, deleteTalkerId);

module.exports = router;
