
const verifyFirstName = (req, res, next) => {
  const { firstName } = req.body;
  if (!firstName || typeof firstName !== 'string') {
    return res.status(400).json({ message: 'O campo "firstName" é obrigatório' });
  }
  next();
};
const verifyLastName = (req, res, next) => {
  const { lastName } = req.body;
  if (!lastName || typeof lastName !== 'string') {
    return res.status(400).json({ message: 'O campo "lastName" é obrigatório' });
  }
  next();
}
const verifyEmail = (req, res, next) => {
  const { email } = req.body;
  if (!email || typeof email !== 'string') {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  next();
}
const verifyPassword = (req, res, next) => {
  const { password } = req.body;
  if (!password || typeof password !== 'string' || password.length < 6) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }
  next();
}
//
module.exports = {
  verifyFirstName,
  verifyLastName,
  verifyEmail,
  verifyPassword
};
//
// users-manager/middlewares/createUser.js

const Joi = require('joi');
const rescue = require('express-rescue');
const UserModel = require('../models/User');

// Primeiro definimos qual o schema da nossa requisição
const userSchema = Joi.object({
	firstName: Joi.string().required(),
	lastName: Joi.string().required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(6).required()
});

// Depois, exportamos um array de middlewares. O primeiro valida a requisição, o segundo chama o model
module.exports = [
(req, res, next) => {
	// Pedimos ao Joi que valide o corpo da requisição de acordo com o que definimos em seu schema
	const { error } = userSchema.validate(req.body);

	// Caso um erro de validação seja encontrado, iniciamos o fluxo de erro e encerramos a execução dos nossos middlewares.
	if (error) return next(error);

		// Se não há nenhum problema com os dados, podemos prosseguir para o próximo middleware
		next();

	},
	rescue(async (req, res, next) => {
	// Extraímos os dados da requisição
	const { firstName, lastName, email, password } = req.body;

	// Pedimos pro model criar o usuário
	const newUser = await UserModel.create({ firstName, lastName, email, password });

	// Com o usuário criado, devolvemos o status 201 Created, a mensagem informando sucesso na operação
	res.status(201).json(newUser);
	}),
];
//
