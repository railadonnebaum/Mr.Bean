var Blog = require('../models/blog')
//get blog pictures
exports.get_blogPics = function(req, res, next){
    Blog.find()
    .exec(function(err, list){
        if(err) return next(err);
        res.send(list);
    })
}
