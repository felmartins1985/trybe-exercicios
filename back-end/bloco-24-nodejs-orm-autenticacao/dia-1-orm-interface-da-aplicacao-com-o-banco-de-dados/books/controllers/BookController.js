const BookService = require('../services/BookService');

const getAll= async (_req, res)=>{
    const books = await BookService.getAll();
    res.status(200).json(books);
}

const getById = async (req, res)=>{
    const {id}=req.params;
    if(!id){
        res.status(404).json({"message":'Book not found'});
    }
    res.status(200).json(book);
}
const createBook= async (req, res)=>{
    const {title, author, pageQuantity, publisher}=req.body;
    const book = await BookService.createBook({title, author, pageQuantity, publisher});
    res.status(201).json(book);
}

const updateBook= async (req, res)=>{
    const {id}= req.params;
    const {title, author, pageQuantity, publisher}=req.body;
    const book = await BookService.updateBook(id,{title, author, pageQuantity, publisher});
    if(!book){
        res.status(404).json({"message":'Book not found'});
    }
    res.status(200).json({"message": 'Book updated'})
}
const deleteBook = async (req, res)=>{
    const { id } = req.params;
    const book = await BookService.deleteBook(id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    res.status(200).json({ message: 'Book removed' });
  };
const getByAuthor = async (req, res)=>{
    const {author}=req.query;
    if (!author){
        const books= await BookService.getAll();
        res.status(200).json(books);
    }
    const books = await BookService.getByAuthor(author);
    res.status(200).json(books);
}
module.exports = {getAll, getById, createBook, updateBook, deleteBook, getByAuthor};