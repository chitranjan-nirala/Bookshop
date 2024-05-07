import express from 'express';
import { getbook } from '../Controller/book_controller.js'; // Corrected import path

const router = express.Router();

router.get('/', getbook); // Define the GET route

export default router; // Export the router
