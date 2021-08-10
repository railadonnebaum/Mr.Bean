//character schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CharacterSchema = new Schema(
    {
        Title: {type:String},
        Flavors:{type:Array},
        Descriptipn: {type:String}
    }
);

module.exports = mongoose.model('Character', CharacterSchema);


