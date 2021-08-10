var Character = require('../models/character')
//get characters
exports.get_characters = function(req, res, next){
    Character.find()
    .exec(function(err, list){
        if(err) return next(err);
        res.send(list);
    })
}



