const readFileSvc = require('../services/readFileSvc');

async function talker(_req, res) {
  const talkersList = await readFileSvc('./talker.json');
  res.json(talkersList);
}

async function talkerId(req, res) {
  const talkersList = await readFileSvc('./talker.json');
  const { id } = req.params;
  const talkersListFiltered = talkersList.find((talkers) => talkers.id === parseInt(id, 5));

  if (talkersListFiltered !== undefined) return res.json(talkersListFiltered);
  const errMessage = { message: 'Pessoa palestrante não encontrada' };
  if (!talkersListFiltered) return res.status(404).json(errMessage);
}

module.exports = {
  talker,
  talkerId,
};
