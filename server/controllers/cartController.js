const { Cart } = require('../models/cartModel');
const { Product } = require('../models/productModel');

// Controller to add a product to the cart
const addCartItem = async (req, res) => {
    const cartItem = req.body;
    cartItem.user_id = req.user._id;
    try {
        const newCartItem = await Cart.create(cartItem);
        res.json(newCartItem);
    } catch (error) {
        res.status(500).json({ error });
    }
};

// Controller to get all cart items
const getCartItems = async (req, res) => {
    try {
        const cartItems = await Cart.find({
            user_id: req.user._id
        });

        let cartItemsWithProduct = [];
        //using the product id to get the product details
        for (const item of cartItems) {
            const product = await Product
                .findById(item.product_id);
            cartItemsWithProduct.push({
                _id: item._id,
                product_id: item.product_id,
                user_id: item.user_id,
                quantity: item.quantity,
                product
            });
        }
        res.json(cartItemsWithProduct);
    } catch (error) {
        res.status(500).json({ error });
    }
};

// delete a cart item
const deleteCartItem = async (req, res) => {
    const { id } = req.params;
    try {
        const cartItem = await Cart.findByIdAndDelete(id);
        if (!cartItem) {
            return res.status(404).json({ error: 'Cart item not found' });
        }
        res.json(cartItem);
    } catch (error) {
        res.status(500).json({ error });
    }
};

//delete existing cart items and put an array of cart items
const deleteAndPutCartItems = async (req, res) => {
    const cartItems = req.body;
    try {
        await Cart.deleteMany({});
        const newCartItems = await Cart.insertMany(cartItems);
        res.json(newCartItems);
    } catch (error) {
        res.status(500).json({ error });
    }
};

//get total price of cart items
const getBillingDetails = async (req, res) => {
    try {
        const cartItems = await Cart.find({
            user_id: req.user._id
        });

        let subPrice = 0;
        for (const item of cartItems) {
            const product = await Product
                .findById(item.product_id);
            subPrice += product.price * item.quantity;
        }

        //determine a random shipping amount
        const shippingPrice = Math.floor(Math.random() * 100);

        const totalPrice = subPrice + shipping;

        res.json({ subPrice, shippingPrice, totalPrice });
    } catch (error) {
        res.status(500).json({ error });
    }
};

module.exports = {
    addCartItem,
    getCartItems,
    deleteCartItem,
    deleteAndPutCartItems,
    getBillingDetails
};