// ./routes/books.routes.ts

import { Router } from 'express';
import BooksController from '../controllers/books.controller';
import validationBook from '../middlewares/books.middleware';

//////////////////////////////////////////////////////////////
const router = Router();
const booksController = new BooksController();
const booksSlashId = '/books/:id'; //variável para não repetir trechos iguais em todas as rotas que usam o id
router.get('/books', booksController.getAll);
router.get('/books/:id', booksController.getById);
router.post('/books/', validationBook, booksController.create);
router.put('/books/:id', validationBook, booksController.update);
router.delete('/books/:id', booksController.remove);
export default router;