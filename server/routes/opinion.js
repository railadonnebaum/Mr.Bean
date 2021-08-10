//opinion router
var express = require('express');
var router = express.Router();

var opinion_controller = require('../controllers/opinionController');
router.get('/', opinion_controller.get_opinions);
router.post('/', opinion_controller.post_create_opinion);
router.patch('/:opinionId', opinion_controller.update_opinion);

module.exports = router;