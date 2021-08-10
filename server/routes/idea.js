//idea router
var express = require('express');
var router = express.Router();

var idea_controller = require('../controllers/ideaController');

router.post('/', idea_controller.post_create_idea);

module.exports = router;