function talkerDataHelper(req, res) {
const { talk } = req.body;

const dateFormat = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

const DateFormatInvalid = {
  message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
};

if (dateFormat.test(talk.watchedAt) === false) return res.status(400).json(DateFormatInvalid);

const rateInvalid = {
    message: 'O campo "rate" deve ser um inteiro de 1 à 5',
};

if (talk.rate < 1 || talk.rate > 5) return res.status(400).json(rateInvalid);
}

module.exports = talkerDataHelper;
