const express = require('express');
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/product-controller');
const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/add', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
