const express = require("express");
const app = express(); // 
const router = express.Router();
const User = require("../../models/user.model");

const config = require("../appConfig.json");
const port = config.ports.auth;

//const { MongoClient } = require("mongodb");
//var url = "mongodb+srv://testlogin.taf1q.mongodb.net/myFirstDatabase?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority";
//const client = new MongoClient(url);

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {check, validationResult } = require("express-validator");

var jwtSecret = "F1n7hEcH47"; //FInTheChat
//require("dotenv").config();


const eventHelper = require("../../server/eventHelper");
//const { Router } = require("express");

app.listen(port, "0.0.0.0", () => {
  console.log(`Auth Server listening at http://localhost:${port}`);
});


//@route POST /signup
//@access Public
router.post("/signup", [
  check("email", "Please provide valid email").isEmail(),
  check("password", "Please Enter a password").isLength({ min: 1}),
],
async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array() })
  }
  const {email, password} = req.body; 
  try {
    //let info = eventHelper.sendEvent("Search", username);
    let user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ errors: [{msg: "User already exists"}]})
    }
    user = new User({
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);

    start.password = await bcrypt.hash(password, salt);

    await start.save();

    const payload = {
      user: {
        id: user.id,
      }
    }
    jwt.sign(payload, jwtSecret, {expiresIn: 360000}, (err,token) => {
      if (err) throw err;
      res.json({ token });
    });

    //eventHelper.sendEvent("createUser", start);
    console.log("Signup successful");

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error")
  }
});

app.get("/auth", async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  }
  catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error")
  }
})

app.post("/login", (req, res) => {
    let username = "gg@gmail.com";//req.body["email"];
    let secret = "getRekted";//req.body["password"];
    console.log(req.body);
    try {
      //check username if username exists in database, checks password
      let info = eventHelper.sendEvent("Search", username);
      console.log(info)
      if (info.email != username) {
        throw new Error("Username doesn't exist");
      }
      if (info.password != secret) {
        throw new Error("Password doesn't match");
      }
    } catch (err) {
      console.log(err)
      res.status(400).send(err);// invalid input
    }
      // create token
      //let coin = jwt.sign({email:"gg@gmail.com"}, "" + process.env.TOKEN_SECRET, {expiresIn: 1800}); // works now, first needs to be object, second to be made into string, and expireIn
      //db.collection("users").updateOne({ token: coin, tokenTimer: 1800 }).then(function (result) {}); // I don't understand this then function thing but it was there
      console.log("Login successful");
      //res.redirect('/getRide'); // redirects to join rides
  });

app.post("/logout", (req, res) => {
  let username = req.body["user"];
  let coin = jwt.sign({email:"gg@gmail.com"}, "" + process.env.TOKEN_SECRET, {expiresIn: 1800});
  try {
    let info = eventHelper.sendEvent("Search", username);
    if (coin != info.token) {
      throw new Error("Token mismatched");
    }
    eventHelper.sendEvent("deleteToken", username);
    res.send({ status: "Logout successful" });
  } catch (err) {
    res.status(424).send(err);
  }
});

app.post("/events", (req, res) => {
  console.log(req.body);
  res.send({ status: "OK" });
});

module.exports = router;