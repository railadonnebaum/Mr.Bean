var Contact = require('../models/idea')
//post an idea
exports.post_create_idea = function(req, res, next){
    var contact = new Contact({
        UserName: req.body.name,
        Email: req.body.email,
        Subject:req.body.subject,
        Text:req.body.text,
    });

    contact.save(function (err){
        if(err) return next(err);
        res.send(contact);
    })
}
