//contact schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema(
    {
        UserName: {type: String},
        Email: {type:String},
        Phone: {type: String},
        Text:{type:String}
    }
);

module.exports = mongoose.model('Contact', contactSchema);