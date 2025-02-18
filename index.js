const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser=require("cookie-parser")

const userRoute = require("./routes/user");
const { checkForAuthenticationCookie } = require("./middlewares/authentication");

const app = express();
const PORT = 9000;

mongoose
  .connect("mongodb://localhost:27017/blog")
  .then(console.log("Mongo DB connected"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views")); 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"))


app.get("/", (req, res) => {
  console.log(req.user)
  res.render("home",{
    user:req.user,
  });
});

app.use("/user", userRoute);

app.listen(PORT, () => console.log(`Server started at port:${PORT}`));
