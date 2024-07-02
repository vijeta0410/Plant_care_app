import express from 'express';
import { getAllProducts } from '../controller/productController.js';

const router = express.Router();

// Route to get all products
router.get('/get-products', getAllProducts);

export default router;
