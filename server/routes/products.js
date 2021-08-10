//product router
var express = require('express');
var router = express.Router();

var product_controller = require('../controllers/productController');

router.get('/:department', product_controller.get_products);
router.patch('/:department/:productID', product_controller.update_product);

module.exports = router;