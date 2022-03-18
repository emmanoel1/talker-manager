// const HTTP_OK_STATUS = require('../index');
const talkerSvc = require('../services/talkerSvc');

const talker = async (_req, res) => {
  const talkersList = await talkerSvc();
  res.json(talkersList);
};

module.exports = {
  talker,
};
