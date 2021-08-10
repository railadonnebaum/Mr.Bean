//order router
var express = require('express');
var router = express.Router();

var order_controller = require('../controllers/orderController');

router.get('/', order_controller.get_orders);
router.post('/', order_controller.post_create_order);

module.exports = router;