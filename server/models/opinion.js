//opinion schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OpinionSchema = new Schema(
    {
      name: {type: String},
      title: {type: String},
      opinion: {type: String},
      score: {type: Number},
      up: {type: Number},
      down: {type: Number},
    }
);

module.exports = mongoose.model('opinion', OpinionSchema);
