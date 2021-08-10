var Opinion = require('../models/opinion')
//get all opinions
exports.get_opinions = function(req, res, next){
    Opinion.find()
    .exec(function(err, list){
        if(err) return next(err);
        res.send(list);
    })
}
//post an opinion
exports.post_create_opinion = function(req, res, next){
    var opinion = new Opinion({
        name:req.body.name,
        title:req.body.title,
        opinion:req.body.opinion,
        score:req.body.score,
        up:0,
        down:0
    });
    opinion.save(function (err, data, next) {
        if (err) return next(err);
        res.send("the orderId " + data._id);
    })
}
//update an opinion
exports.update_opinion = function(req, res, next){
    Opinion.findByIdAndUpdate(req.params.opinionId, req.body, function(err, old, updated){
        if(err) return next(err);
        res.send();
    });
}

