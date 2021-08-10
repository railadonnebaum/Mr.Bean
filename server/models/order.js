//order schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema(
    {
        orders: {type: Array},
    }
);
module.exports = mongoose.model('Order', OrderSchema);


