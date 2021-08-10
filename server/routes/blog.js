
//blog router
var express = require('express');
var router = express.Router();
var blog_controller = require('../controllers/blogController');

router.get('/', blog_controller.get_blogPics);

module.exports = router;