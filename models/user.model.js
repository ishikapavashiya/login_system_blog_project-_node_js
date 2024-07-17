
let mongoose = require("mongoose");

let loginSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:Number,
        require:true,
    },
})
let login = mongoose.model("login",loginSchema);
module.exports = login;