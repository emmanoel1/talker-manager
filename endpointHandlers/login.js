const tokenGenerator = require('../services/tokenGenerator');

function talkerLogin(req, res) {
    const { email, password } = req.body;

    const emailValidation = /.+@.+\..+/;
    const wrongEmailFormatMessage = { message: 'O "email" deve ter o formato "email@email.com"' };
    const emptyEmailMessage = { message: 'O campo "email" é obrigatório' };
   
    if (!email) return res.status(400).json(emptyEmailMessage);
    if (emailValidation.test(email) === false) return res.status(400).json(wrongEmailFormatMessage);
    
    const wrongPasswordLengthMessage = { message: 'O "password" deve ter pelo menos 6 caracteres' };
    const emptyPasswordMessage = { message: 'O campo "password" é obrigatório' };

    if (!password) return res.status(400).json(emptyPasswordMessage);
    if (password.length < 6) return res.status(400).json(wrongPasswordLengthMessage);

  return res.json({ token: tokenGenerator() });
}

module.exports = talkerLogin;
