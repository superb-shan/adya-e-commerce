const mongoose = require('mongoose');

// Define the schema for the category
const cartSchema = new mongoose.Schema({
  product_id: String,
  quantity: Number,
  user_id: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Compile the schemas into models
const Cart = mongoose.model('Cart', cartSchema);

module.exports = { Cart };