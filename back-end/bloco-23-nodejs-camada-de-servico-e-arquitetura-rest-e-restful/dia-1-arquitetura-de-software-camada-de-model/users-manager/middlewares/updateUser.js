const verifyFirstName = (req, res, next) => {
  const { firstName } = req.body;
  if (!firstName ) {
    return res.status(400).json({ message: 'O campo "firstName" é obrigatório' });
  }
  if(firstName ===''){
    return res.status(400).json({ message: 'O campo "firstName" nao pode estar vazio' });
  }
  next();
};
const verifyLastName = (req, res, next) => {
  const { lastName } = req.body;
  if(lastName ===''){
    return res.status(400).json({ message: 'O campo "lastName" nao pode estar vazio' });
  }
  next();
}
const verifyEmail = (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if(email ===''){
    return res.status(400).json({ message: 'O campo "email" nao pode estar vazio' });
  }
  next();
  if (typeof email !== 'string') {
    return res.status(400).json({ message: 'O campo "email" tem que ser escrito de forma valida' });
  }
}
const verifyPassword = (req, res, next) => {
  const { password } = req.body;
  if (!password ) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }
    if (password==='') {
      return res.status(400).json({ message: 'O campo "password" nao pode estar vazio' });
    }
    next();
  if (typeof password !== 'string' || password.length < 6) {
    return res.status(400).json({ message: 'O campo "password" tem que ser escrito de forma valida' });
  }
  next();
}