const readFileSvc = require('../services/readFileSvc');

async function talker(_req, res) {
  const talkersList = await readFileSvc('./talker.json');

  res.json(talkersList);
}

module.exports = {
    talker,
};
