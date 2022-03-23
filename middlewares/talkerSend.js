const fs = require('fs');
const readFileSvc = require('../services/readFileSvc');

async function talkerSend(req, res) {
    const { name, age, talk, watchedAt, rate } = req.body;

    const readFile = await readFileSvc('talker.json');

    readFile.push({ id: readFile.length + 1, name, age, talk, watchedAt, rate });

    const fileJson = JSON.stringify(readFile);

    fs.writeFileSync('talker.json', fileJson, 'utf-8');

    const response = { id: readFile.length, name, age, talk, watchedAt, rate };

    return res.status(201).json(response);
}

module.exports = talkerSend;
