const Book = (sequelize, DataTypes) => {
  const Book = sequelize.define("Book", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    publisher: DataTypes.STRING, 
  },
);

  return Book;
};

module.exports = Book;