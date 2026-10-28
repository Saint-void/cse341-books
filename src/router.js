import express from 'express';
import { getBooksHandler } from './controllers/book.js';

const router = express.Router();

router.get('/books', getBooksHandler);

export default router;