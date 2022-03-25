const express = require('express');

const router = express.Router();

const fs = require('fs');

// const readFileSyncSvc = require('./services/readFileSyncSvc');

const talker = require('./endpointHandlers/talker');
const talkerId = require('./endpointHandlers/talkerId');
const talkerLogin = require('./endpointHandlers/login');

const talkerAuth = require('./middlewares/talkerAuth');
const talkerName = require('./middlewares/talkerName');
const talkerAge = require('./middlewares/talkerAge');
const talkerData = require('./middlewares/talkerData');
const readFileSvc = require('./services/readFileSvc');

const dataLocation = 'talker.json';
// const talkerSend = require('./middlewares/talkerSend');

// const putTalkerId = require('./endpointHandlers/putTalkerId');
// const deleteTalkerId = require('./endpointHandlers/deleteTalkerId');

router.get('/talker', talker);

router.get('/talker/:id', talkerId);

router.post('/login', talkerLogin);

router.post('/talker', talkerAuth, talkerName, talkerAge, talkerData, async (req, res) => {
    const { name, age, talk, watchedAt, rate } = req.body;

      const readFile = await readFileSvc(dataLocation);

    readFile.push({ id: readFile.length + 1, name, age, talk, watchedAt, rate });

    const fileJson = JSON.stringify(readFile);

    fs.writeFileSync(dataLocation, fileJson, 'utf-8');

    const response = { id: readFile.length, name, age, talk, watchedAt, rate };

    return res.status(201).json(response);
});

// router.put('/talker/:id', talkerAuth, talkerName, talkerAge, talkerData, (req, res) => {
//     const { id } = req.params;
//     const { name, age, talk } = req.body;

//     const readed = readFileSyncSvc(dataLocation);

//     const itemReadIndex = readed.findIndex((item) => item.id === Number(id));

//     readed[itemReadIndex] = { name, age, id: Number(id), talk };

//     fs.writeFileSync(dataLocation, JSON.stringify(readed));

//     const response = { name, age, id: Number(id), talk };

//     return res.json(response);
// });

// router.delete('/talker/:id', talkerAuth, (req, res) => {
//     const { id } = req.params;

//     const readed = readFileSyncSvc(dataLocation);

//     const search = readed.filter((talk) => talk.id === id);

//     fs.writeFileSync(dataLocation, JSON.stringify(search));

//     return res.status(204).json();
// });

module.exports = router;
