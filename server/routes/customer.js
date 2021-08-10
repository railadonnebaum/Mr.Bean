//customer roter
var express = require('express');
var router = express.Router();

var customer_controller = require('../controllers/customerController');
router.post('/', customer_controller.get_customer);
module.exports = router;

