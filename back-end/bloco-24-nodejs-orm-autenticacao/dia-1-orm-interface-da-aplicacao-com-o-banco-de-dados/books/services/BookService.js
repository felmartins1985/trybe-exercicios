const { Book } = require('../models');
// Crie um service BooksService com o método getAll para retornar uma lista de livros por meio do model Book.
const getAll= async ()=>{
    const books = await Book.findAll();
    return books;
}
const getById = async (id)=>{
  const findBook = await Book.findByPk(id);
  return findBook;
}

const createBook= async({title, author, pageQuantity})=>{
  const book = await Book.create({title, author, pageQuantity})
  return book;
}

const updateBook= async (id,{title, author, pageQuantity})=>{
  const [updateBook] = await Book.update(
    {title, author, pageQuantity},
    { where: { id } })
  return updateBook;  
};

const deleteBook= async (id)=>{
  const deleteBook = await Book.destroy({where: {id}});
  return deleteBook;
}

module.exports = {getAll, getById, createBook, updateBook, deleteBook};