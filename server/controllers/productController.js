var Product = require('../models/product.js');
//get all products
exports.get_products = function (req, res, next) {
    Product[req.params.department].find()
        .exec(function (err, list) {
            if (err) return next(err);
            res.send(list);
        })
}
//update product
exports.update_product = function(req, res, next){
    Product[req.params.department].findByIdAndUpdate(req.params.productID, req.body, function(err, old, updated){
        if(err) return next(err);
        res.send();
    });
}

