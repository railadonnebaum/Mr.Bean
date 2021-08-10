var mailService = require('../services/mailService')
var validateEmail = require('../services/validation')
//email the news letter
exports.newsLetter = function(req, res){
    if (validateEmail.validateEmail(req.body.email)){
        mailService.emailNewsLetter(req.body.email);
        res.send('sent email');
    }   
    else{
        res.send('not valid email');
    }
}
//email when a client purchase from the site
exports.purchase = function(req, res){
    if (validateEmail.validateEmail(req.body.email)){
        mailService.emailPurchase(req.body.email, req.body.name);
         res.send('sent email');
    }
    else{
        res.send('not valid email');
    }
}
//email when a client shared over an idea
exports.idea = function(req, res){
    if (validateEmail.validateEmail(req.body.email)){
        mailService.emailIdea(req.body.email);
         res.send('sent email');
    } else{
        res.send('not valid email');
    }
}
//email when a client askes a question
exports.question = function(req, res){
    if (validateEmail.validateEmail(req.body.email)){
        mailService.emailQuestion(req.body.email);
         res.send('sent email');
    } else{
        res.send('not valid email');
    }
}
