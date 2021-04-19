const express = require('express');
const router = express.Router();

const {getAllProductById, getAllProducts} = require('../controller/productControllers');


//get all products from db

router.get('/', getAllProducts);

//get a product by id

router.get('/:id', getAllProductById);

module.exports = router