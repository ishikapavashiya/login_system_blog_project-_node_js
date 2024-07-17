require("dotenv").config();
let http = require("http");
let express = require("express");
let cors = require("cors")
const cookieParser = require("cookie-parser");
const dbConnect = require("./DB/DBconnect");
const routes = require("./routes");
let app = express();


// cookie
app.use(cookieParser());


app.use(
    cors({
        origin: "*"
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
dbConnect();


app.use("/v1", routes)


app.get("/", (req, res) => {
    res.render("index");
  });
  
app.set("view engine", "ejs");

http.createServer(app).listen(process.env.PORT, () => {
    console.log(`server strated ${process.env.PORT}`);
});