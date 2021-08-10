var Customer = require('../models/customer')
var validateCustomer = require('../services/validation')
//get all customers
exports.get_customers = function(req, res, next){
    Customer.find()
    .exec(function(err, list){
        if(err) return next(err);
        res.send(list);
    })
}
//get a specified customer
exports.get_customer = function(req, res, next){
    Customer.find({Email: req.body.email }).exec(function(err, list) {
        if(err) return next(err);
        res.send(list)
    })
}
//post customer
exports.post_create_customer = function(req, res, next){
    var customer = new Customer({
        UserName: req.body.UserName,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        Password: req.body.Password,
        flavor: req.body.flavor
    });
    if(validateCustomer.validateCustomer(customer)){
        customer.save(function (err){
            if(err) return next(err);
            res.send(customer);
        })
    }
    else{
        res.send("invalid")
    }
    
}

//update a specified customer
exports.update_customer = function(req, res, next){
    Customer.findByIdAndUpdate(req.params.customerId, req.body, function(err, old, updated){
        if(err) return next(err);
        res.send();
    });
}
//delete a specified customer
exports.delete_customer = function(req, res, next){
    console.log('will delete ', req.params.customerEmail)
    Customer.deleteOne({Email: req.params.customerEmail }, function (err) {
        if(err) return next(err);
        res.send();
    });
}

