const { Book } = require('../models');
// Crie um service BooksService com o método getAll para retornar uma lista de livros por meio do model Book.
const getAll= async ()=>{
    const books = await Book.findAll({order: [['id', 'ASC']]});
    return books;
}
const getById = async (id)=>{
  const findBook = await Book.findByPk(id);
  return findBook;
}

const createBook= async({title, author, pageQuantity, publisher})=>{
  const book = await Book.create({title, author, pageQuantity, publisher})
  return book;
}

const updateBook= async (id,{title, author, pageQuantity, publisher})=>{
  const [updateBook] = await Book.update(
    {title, author, pageQuantity, publisher},
    { where: { id } })
  return updateBook;  
};

const deleteBook= async (id)=>{
  const deleteBook = await Book.destroy({where: {id}});
  return deleteBook;
}

const getByAuthor= async (author)=>{
  const findAuthor = await Book.findAll({where:{author},order: [['id', 'ASC']]});
  return findAuthor;
}

module.exports = {getAll, getById, createBook, updateBook, deleteBook, getByAuthor};