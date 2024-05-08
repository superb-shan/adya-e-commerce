const express = require('express');
const { getAllProducts, getProductById, postProducts, addProduct, deleteAllProducts } = require('../controllers/productController');

const router = express.Router();

// Get all products
router.get('/', getAllProducts);

// Get a single product by ID
router.get('/:id', getProductById);

// post products
router.post('/add', postProducts);

//post single product
router.post('/add-single', addProduct);

//delete all products
router.delete('/delete', deleteAllProducts);

module.exports = router;