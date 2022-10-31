const mongoose = require('mongoose')

const SingleHomePostSchema = new mongoose.Schema(
    // schema in the form of an object
    {
        title:{
            type:String,
            required:true,
            unique:true,
        },
        desc:{
            type:String,
            required:true,
        },
        photo:{
            type:String,
            required:false,
        },
        username:{
            type:String,
            required:true,
        },
        categories:{
            type:Array,
            required:false,
        },
    },
    {timestamps:true}
);
module.exports= mongoose.model("SingleHomePost",SingleHomePostSchema);