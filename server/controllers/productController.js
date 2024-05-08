const { Product, Category } = require('../models/productModel');

// Controller to get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Controller to get a single product by ID
const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

//Controller to post array of products with category
const postProducts = async (req, res) => {
    const products = req.body;
    try {
        const newProducts = await Product.insertMany(products);
        res.json(newProducts);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

//Controller to add a single product
const addProduct = async (req, res) => {
    const product = req.body;

    try {
        const newProduct = await Product.create(product);
        res.json(newProduct);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

//delete all products
const deleteAllProducts = async (req, res) => {
    try {
        await Product.deleteMany({});
        res.json({ message: 'All products deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Export the controllers
module.exports = {
    getAllProducts,
    getProductById,
    postProducts,
    addProduct,
    deleteAllProducts,
};