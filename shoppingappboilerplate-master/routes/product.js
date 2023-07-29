const express = require('express');
const { getProducts, addProduct, deleteProduct } = require('../controllers/product')

const router = express.Router();

// Write the code to specify the route of getProduct, addProduct and deleteProduct method
router.route('/').post(addProduct).get(getProducts).delete(deleteProduct)

module.exports = router