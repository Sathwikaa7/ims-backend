const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Add a product
router.post('/', async (req, res) => {
  const { name, price, qty, sum } = req.body;
  try {
    const newProduct = new Product({ name, price, qty, sum });
    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update a product
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, price, qty, sum } = req.body;
  try {
    await Product.findByIdAndUpdate(id, { name, price, qty, sum });
    res.json({ message: 'Product updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a product
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
