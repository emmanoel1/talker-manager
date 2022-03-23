function talkerName(req, res, next) {
  const { name } = req.body;

    const nameEmpty = {
      message: 'O campo "name" é obrigatório',
    };

  if (!name) return res.status(400).json(nameEmpty);

    const nameInvalid = {
      message: 'O "name" deve ter pelo menos 3 caracteres',
    };

  if (name.length < 3) return res.status(400).json(nameInvalid);

next();
}

module.exports = talkerName;
