const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_num: DataTypes.STRING,
  },
  {
    underscored: true,// faz com que parâmetros recebidos em Camel Case sejam convertidos em Snake Case
    tableName: 'Users',// Aqui declaramos explicitamente qual o nome da tabela que estamos referenciando
  });

  return User;
};

module.exports = User;