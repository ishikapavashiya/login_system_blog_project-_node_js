let jwt = require("jsonwebtoken");


let createToken = (data) => {
    console.log(data, "jwt");
    let user = jwt.sign(data, process.env.SCERET)
    return user;
}
let islogin = (req,res,next)=>{
    try{
        let token = req.cookies["token"];
        if(!token){
            throw new Error("you are not logged in !")
        }
        let user = jwt.verify(token,process.env.SECRET);
        console.log(user);
        req.user = user;
        next();
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}
module.exports = { createToken, islogin}