const connection = require('./connection');
const serialize = (userData) => ({
	id: userData.id,
	firstName: userData.first_name,
	email: userData.email,
	lastName: userData.password});

  const create = async ({firstName,lastName,email, password}) => 
  {
    const user= connection.execute('INSERT INTO users_crud.users (first_name,last_name,email,password) VALUES (?,?,?,?)',
    [firstName, lastName, email, password]);
    const newUser={id: user.insertId, firstName, lastName, email};
    return newUser;
  };

  const findAll= async () => {
    const users = await connection.execute(
      'SELECT * FROM users_crud.users;',
    );
      return users.map(serialize);
  };
  const findById = async (id) => {
    const query = 'SELECT * FROM users_crud.users WHERE id = ?'
    const user = await connection.execute(query, [id]);
    if (user.length === 0) return null;
    // Utilizamos [0] para buscar a primeira linha, que deve ser a única no array de resultados, pois estamos buscando por ID.
    const findUser = user.map(serialize)[0];
    return findUser;
  };
  const updateUser= async(id, {firstName,lastName,email, password}) => {
    await connection.execute(
      'UPDATE users_crud.users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?',
      [firstName, lastName, email, password, id],
    );
    return findById(id);
  }

  module.exports={
    serialize,
    create,
    findAll,
    findById,
    updateUser
  }