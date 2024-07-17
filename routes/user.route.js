let express = require("express");
let { usercontroller } = require("../controller");
const { islogin } = require("../middleware/auth");
//  let validate = require("../middleware/validate")
//  let {uservalidations} = require("../validations")
let route = express.Router();

route.post("/register",islogin,usercontroller.register);
route.get("/get",islogin,usercontroller.getuser);
route.delete("delete/:id", usercontroller.deleteuser);
route.put("updata/:id", usercontroller.updatauser);

route.post("/login", usercontroller.login);

module.exports = route;