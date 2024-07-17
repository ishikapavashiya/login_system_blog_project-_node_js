let express = require("express");
let {  postcontroller } = require("../controller");
let route = express.Router();

route.post("/create",postcontroller.createPost )
route.get("/get/:id",postcontroller.findAllPosts );
route.put("/update/:id",postcontroller.findPostById);
route.delete("/delete/:id",postcontroller.updatePost);

module.exports=route;
