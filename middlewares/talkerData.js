const talkerDataHelper = require('./helpers/talkerDataHelper');

function talkerData(req, res, next) {
    const { talk } = req.body;

      const talkErrorMessage = {
        message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
      };

    if (!talk
     || !talk.watchedAt
     || talk.rate === undefined
    ) return res.status(400).json(talkErrorMessage);

    talkerDataHelper(req, res);

next();
}

module.exports = talkerData;
