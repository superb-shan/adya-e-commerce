const mongoose = require('mongoose');

// Define the schema for the product
const productSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  description: String,
  image: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  category: String,
  rating: {
    rate: Number,
    count: Number,
  },
  }
);

// Compile the schemas into models
const Product = mongoose.model('Product', productSchema);

module.exports = { Product };
