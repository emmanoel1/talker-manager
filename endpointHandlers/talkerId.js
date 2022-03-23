const readFileSvc = require('../services/readFileSvc');

async function talkerId(req, res) {
  const talkersList = await readFileSvc('./talker.json');
  
  const { id } = req.params;

  const talkersListFiltered = talkersList.find((talkers) => talkers.id === Number(id));

  if (talkersListFiltered !== undefined) return res.json(talkersListFiltered);

  const errMessage = { message: 'Pessoa palestrante não encontrada' };

  if (!talkersListFiltered) return res.status(404).json(errMessage);
}

module.exports = talkerId;
