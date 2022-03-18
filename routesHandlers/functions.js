const talkerSvc = require('../services/talkerSvc');

async function talker(_req, res) {
  const talkersList = await talkerSvc();
  res.json(talkersList);
}

module.exports = {
  talker,
};
