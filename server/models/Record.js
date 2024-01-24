const mongoose = require('mongoose');
const { Schema } = mongoose;
 
const Record = new Schema({
   name: String,
   email: String,
   address: String,
   gender: String,
   path: String, 
},
// {
//    timestamps: true
// }
);
 
module.exports = mongoose.model('Record', Record);


