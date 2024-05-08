const express = require('express');
const {
    addCartItem,
    getCartItems,
    deleteCartItem,
    deleteAndPutCartItems,
    getBillingDetails
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

// Delete and add many cart items
router.put('/delete-and-add', deleteAndPutCartItems);

// get billing details
router.get('/billing', getBillingDetails);

module.exports = router;