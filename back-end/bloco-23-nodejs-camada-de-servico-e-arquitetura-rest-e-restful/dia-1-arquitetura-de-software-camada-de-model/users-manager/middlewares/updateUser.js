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
module.exports={
  verifyFirstName,
  verifyLastName,
  verifyEmail,
  verifyPassword,
}

//
// users-manager/middlewares/updateUser.js

// const rescue = require('express-rescue');
// const UserModel = require('../models/User');

// module.exports = [
// 	(req, res, next) => {
// 			// De forma semelhante ao middleware de criação de usuário, começamos validando os dados da request
// 			const { error } = UserModel.isValid(req.body);

// 			// Caso um erro de validação seja encontrado, iniciamos o fluxo de erro e encerramos a execução dos nossos middlewares.
// 			if (error) return next(error);

// 			// Se não há nenhum problema com os dados, podemos prosseguir para o próximo middleware
// 			next();
// 	},
// 	rescue(async (req, res) => {
// 			// Extraímos o id do usuário da rota
// 			const { id } = req.params;
// 			// Extraímos os dados da request
// 			const { firstName, lastName, email, password } = req.body;

// 			// Pedimos que o model altere e nos devolva o usuário alterado
// 			const updatedUser = await UserModel.updateUser(id, { firstName, lastName, email, password });

// 			// Caso nenhum usuário seja encontrado
// 			if (!updatedUser) {
// 				// Retornamos o status 404 Not Found e uma mensagem de erro
// 				return res.status(404).json({ message: 'User not Found' });
// 			}

// 			// Caso dê tudo certo, retornamos o status 200 OK e os dados do usuário atualizado
// 			return res.status(200).json(updatedUser);

// 	}),
// ];