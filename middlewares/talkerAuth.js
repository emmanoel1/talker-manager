function talkerAuth(req, res, next) {
  const { authorization } = req.headers;

    const authTokenEmpty = {
        message: 'Token não encontrado',
    };

if (!authorization) return res.status(401).json(authTokenEmpty);

    const authTokenInvalid = {
        message: 'Token inválido',
    };

if (authorization.length !== 16) return res.status(401).json(authTokenInvalid);

next();
}

module.exports = talkerAuth;
