let express = require("express");
let routes = express.Router();
let userroute = require("./user.route");
let postroute = require("./post.route")

routes.use("/user", userroute);
routes.use("/post", postroute);


module.exports = routes;