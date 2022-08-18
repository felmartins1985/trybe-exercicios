const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const BooksController = require('./controllers/BookController');

app.use(express.json());
app.get('/books', BooksController.getAll);
app.post('/books', BooksController.createBook);
app.get('/books/:id', BooksController.getById);
app.put('/books/:id', BooksController.updateBook);
app.delete('/books/:id', BooksController.deleteBook);
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
