import express from 'express';
import { getBook } from '../controller/book.controller.js';

const bookRoutes=express.Router()

bookRoutes.get('/book',getBook)

export default bookRoutes;