const fs = require('fs');
const readFileSyncSvc = require('../services/readFileSyncSvc');

function putTalkerId(req, res) {
    const { id } = req.params;
    const { name, age, talk } = req.body;

    const readed = readFileSyncSvc('talker.json');

    const itemReadIndex = readed.findIndex((item) => item.id === Number(id));

    readed[itemReadIndex] = { name, age, id: Number(id), talk };

    fs.writeFileSync('talker.json', JSON.stringify(readed));

    const response = { name, age, id: Number(id), talk };

    return res.json(response);
}

module.exports = putTalkerId;
