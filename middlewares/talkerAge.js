function talkerAge(req, res, next) {
  const { age } = req.body;

    const ageEmpty = {
      message: 'O campo "age" é obrigatório',
    };

  if (!age) return res.status(400).json(ageEmpty);

    const ageInvalid = {
      message: 'A pessoa palestrante deve ser maior de idade',
    };

  if (age < 18) return res.status(400).json(ageInvalid);

  next();
}

module.exports = talkerAge;
