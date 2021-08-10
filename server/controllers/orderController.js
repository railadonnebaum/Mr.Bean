var Order = require('../models/order')
//get all orders
exports.get_orders = function(req, res, next){
    Order.find()
    .exec(function(err, list){
        if(err) return next(err);
        res.send(list);
    })
}
//post an order
exports.post_create_order = function(req, res, next){
    var order = new Order({
       orders:req.body
    });
    order.save(function (err){
        if(err) return next(err);
        res.send(order);
    })
}
