import express from "express";
import { addProduct, getProducts, getProductById, updateProduct, deleteProduct } from '../controllers/productController.js';

const router= express.Router();

// Product routes
router.post('/products', addProduct);           // Add a new product
router.get('/products', getProducts);           // Get all products
router.get('/products/:id', getProductById);    // Get a product by ID
router.put('/products/:id', updateProduct);     // Update a product by ID
router.delete('/products/:id', deleteProduct);  // Delete a product by ID

export default router;