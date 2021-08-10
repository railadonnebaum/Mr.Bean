//idea schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ideaSchema = new Schema(
    {
        UserName: {type: String},
        Email: {type:String},
        Subject: {type: String},
        Text:{type:String}
    }
);

module.exports = mongoose.model('Idea', ideaSchema);