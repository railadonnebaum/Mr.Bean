//contacts router
var express = require('express');
var router = express.Router();

var contact_controller = require('../controllers/contactController');

router.post('/', contact_controller.post_create_contact);

module.exports = router;