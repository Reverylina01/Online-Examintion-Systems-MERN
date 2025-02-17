const mongoose = require("mongoose");
//create the category schema
const categorySchema = new mongoose.Schema({
    name: { type: String, required: true ,unique: true   }
});
module.exports =  mongoose.model('Category',categorySchema);