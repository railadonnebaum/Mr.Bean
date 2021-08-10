//character router
var express = require('express');
var router = express.Router();

var character_controller = require('../controllers/characterController');

router.get('/', character_controller.get_characters);

module.exports = router;