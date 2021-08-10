//customers router
var express = require('express');
var router = express.Router();

var customer_controller = require('../controllers/customerController');

router.get('/', customer_controller.get_customers);
router.post('/', customer_controller.post_create_customer);
router.delete('/:customerEmail', customer_controller.delete_customer);
router.patch('/:customerId', customer_controller.update_customer);

module.exports = router;