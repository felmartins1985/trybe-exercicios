const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Token not found' });
  }
  try {
    /* Através do método verify, podemos validar e decodificar o nosso JWT. */
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log(decoded);
    /* Caso o token esteja expirado, a própria biblioteca irá retornar um erro,
       por isso não é necessário fazer validação do tempo.
       Caso esteja tudo certo, nós então buscamos o usuário na base para obter seus dados atualizados */
    req.user = decoded;
    return next();
    /* Não existe um usuário na nossa base com o id informado no token. */
  } catch (err) {
    next(err);
  }
};