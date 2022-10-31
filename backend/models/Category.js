const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema(
    // schema in the form of an object
    {
        name:{
            type:String,
            required:true,
        },
    },
    {timestamps:true}
);
module.exports= mongoose.model("Category",CategorySchema);