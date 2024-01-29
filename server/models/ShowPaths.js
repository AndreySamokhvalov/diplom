const mongoose = require('mongoose');
const { Schema } = mongoose;

const ShowPaths = new Schema({
    id: String, 
    title: String, 
    url: String, 
    lvl: String, 
    rating: String
 },
);

 module.exports = mongoose.model('ShowPaths', ShowPaths);