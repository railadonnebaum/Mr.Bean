//products schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema(
    {  
        name: {type: String},
        description: {type: String},
        text: {type: String},
        price: {type: Number},
        quantity: {type: Number},
        src: {type: String}
    }
);

module.exports = {CoffeeMachines:mongoose.model('coffeemachine', ProductSchema),
                  CoffeeCapsules:mongoose.model('coffeecapsule', ProductSchema),
                  Accessories:mongoose.model('accessories', ProductSchema),
                  WholeBean:mongoose.model('wholebean', ProductSchema)}