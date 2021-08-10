//email router
var express = require('express');
var router = express.Router();

var email_controller = require('../controllers/emailController');

router.post('/newsLetter', email_controller.newsLetter);
router.post('/purchase', email_controller.purchase);
router.post('/question', email_controller.question);
router.post('/idea', email_controller.idea);

module.exports = router;
