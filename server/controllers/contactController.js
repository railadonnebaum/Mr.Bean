var Contact = require('../models/contact')
//post contact
exports.post_create_contact = function(req, res, next){
    var contact = new Contact({
        UserName: req.body.name,
        Email: req.body.email,
        Phone:req.body.phone,
        Text:req.body.text,
    });

    contact.save(function (err){
        if(err) return next(err);
        res.send(contact);
    })
}
