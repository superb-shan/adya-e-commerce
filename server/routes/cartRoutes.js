const express = require('express');
const {
    addCartItem,
    getCartItems,
    deleteCartItem
} = require('../controllers/cartController');
const AuthMiddleware = require('../middleware/AuthMiddleware');

const router = express.Router();
router.use(AuthMiddleware)

// Add a product to the cart
router.post('/add', addCartItem);

// Get all cart items
router.get('/all', getCartItems);

// Delete a cart item
router.delete('/:id', deleteCartItem);

module.exports = router;