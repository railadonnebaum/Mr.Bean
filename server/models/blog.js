//blog schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogSchema = new Schema(
    {
        Blog: {type: Array},
    }
);

module.exports = mongoose.model('Blog', BlogSchema);


