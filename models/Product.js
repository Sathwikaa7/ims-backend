const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  Productname: { type: String, required: true },
  Price: { type: Number, required: true },
  qty: { type: Number, required: true },
  Amount: { type: Number, required: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
