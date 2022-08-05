const connection = require('./connection');
const serialize = (userData) => ({
	id: userData.id,
	firstName: userData.first_name,
	email: userData.email,
	lastName: userData.password});

  const create = async ({firstName,lastName,email, password}) => 
  {
    const user= await connection.execute('INSERT INTO users_crud.users (first_name,last_name,email,password) VALUES (?,?,?,?)',
    [firstName, lastName, email, password]);
    const newUser={id: user.insertId, firstName, lastName, email};
    return newUser;
  };
//
  const findAll= async () => {
    const users = await connection.execute(
      'SELECT * FROM users_crud.users;',
    );
      return users.map(serialize);
  };
  // function findAll() {
  //   // Mais uma vez, chamamos connection.execute para executar nossa query.
  //   return connection.execute('SELECT * from users;')
  //     // Passamos cada resultado pela função de formatação
  //     .then(([results]) => results.map(formatUser));
  // }
  //
  const findById = async (id) => {
    const query = 'SELECT * FROM users_crud.users WHERE id = ?'
    const user = await connection.execute(query, [id]);
    if (user.length === 0) return null;
    // Utilizamos [0] para buscar a primeira linha, que deve ser a única no array de resultados, pois estamos buscando por ID.
    const findUser = user.map(serialize)[0];
    return findUser;
  };
  // function findById(id) {
  //   // Realizamos uma consulta buscando o usuário por ID
  //   return connection.execute('SELECT * FROM users WHERE id = ?', [id])
  //     .then(([results]) => {
  //     // caso encontre o usuário pelo id, ele será o 1º item no result.
  //     // assim podemos formatá-lo e retornar os dados
  //     if (results[0]) return formatUser(results[0]);
  //     // caso contrário retorne nulo
  //     return null;
  //     });
  // }
  
  //
  const updateUser= async(id, {firstName,lastName,email, password}) => {
    await connection.execute(
      'UPDATE users_crud.users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?',
      [firstName, lastName, email, password, id],
    );
    return findById(id);
  }
  // const Joi = require('joi');

  // const userSchema = Joi.object({
  //   firstName: Joi.string().required(),
  //   lastName: Joi.string().required(),
  //   email: Joi.string().email().required(),
  //   password: Joi.string().min(6).required()})
  
  // // Criamos um método para verificar se os dados do usuário são válidos
  // function isValid(userData) {
  //   return userSchema.validate(userData);
  // }

//
  module.exports={
    create,
    findAll,
    findById,
    updateUser
  }