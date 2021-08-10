//customer schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CustomerSchema = new Schema(
    {
      UserName: {type:String, require:true},
      FirstName:{type:String, require:true},
      LastName: {type:String, require:true},
      Email:{type:String, require:true} ,
      Password: {type:String, require:true},
      flavor: {type:String},
    }
);

module.exports = mongoose.model('Customers', CustomerSchema);


