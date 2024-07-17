let { userService } = require("../service");
let { createToken } = require("../middleware/auth")

let register = async (req, res) => {
    try {
        console.log(req.body);
        let body = req.body;

        let user = await userService.register(body)

        res.status(201).json({
            message: "user register success", user
        });
    }
    catch (err) {
        console.log(err, "err");
    }
}
let getuser = async (req, res) => {
    let users = await userService.findAllusers();
    res.status(200).json({
        message: "get all user successfully", users
    });
};
let deleteuser = async (req, res) => {
    console.log(req.params);

    let { id } = req.params;
    let user = await userService.deleteuser(id);

    console.log(user);
    res.status(200).json({
        message: "user delete successfuly", user
    });
};
let updatauser = async (req, res) => {
    let body = req.body;
    let { id } = req.params;


    let result = await userService.updatauser(id, body);

    res.status(200).json({
        message: "updata all user successfully", result,
    });
}

let login = async (req, res) => {
    try {

        let { email, password } = req.body;

        let user = await userService.findUser(email)
        console.log(user);

        if (!user) {
            throw new Error("user not found")
        }

        if (user.password != password) {
            throw new Error("password is invalid")
        }

        let token = createToken({ user });
        console.log(token);

        res.cookie(token, "token")

        res.status(200).json({
            meassage: "login Successfully!",
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

let getProfile = (req, res) => {

    let user = req.user
    res.status(200).json({
        message: "Profile get success",
        user,
    })

}


module.exports = { register, getuser, deleteuser, updatauser, login, getProfile };