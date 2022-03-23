const fs = require('fs');
const readFileSyncSvc = require('../services/readFileSyncSvc');

function deleteTalkerId(req, res) {
    const { id } = req.params;

    const readed = readFileSyncSvc('talker.json');

    const search = readed.filter((talker) => talker.id === id);

    fs.writeFileSync('talker.json', JSON.stringify(search));

    return res.status(204).end();
}

module.exports = deleteTalkerId;
