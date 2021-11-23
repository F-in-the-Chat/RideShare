const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const config = require("../appConfig.json");
const port = config.ports.auth;
var url =
  "mongodb+srv://testlogin.taf1q.mongodb.net/myFirstDatabase?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority";
const client = new MongoClient(url);

const jwt = require("jsonwebtoken");
TOKEN_SECRET = "F1n7hEcH47"; //FInTheChat
require("dotenv").config();


const eventHelper = require("../../server/eventHelper");

app.listen(port, "0.0.0.0", () => {
  console.log(`Auth Server listening at http://localhost:${port}`);
});

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
    let coin = jwt.sign({email:"gg@gmail.com"}, "" + process.env.TOKEN_SECRET, {expiresIn: 1800}); // works now, first needs to be object, second to be made into string, and expireIn
    //db.collection("users").updateOne({ token: coin, tokenTimer: 1800 }).then(function (result) {}); // I don't understand this then function thing but it was there
    console.log("Login successful");
    //res.redirect('/getRide'); // redirects to join rides
});

app.post("/signup", (req, res) => {
  //post request bc we are adding to database
  // check for username/email
  let username = req.body["user"];
  let secret = req.body["password"];
  try {
    let info = eventHelper.sendEvent("Search", username);
    //let test = db.users.find({email:username})
    if (info.length != 0) {
      throw new Error("Username exists");
    }
  } catch (err) {
    res.status(400).send(err);
  }
  let coin = jwt.sign({email:"gg@gmail.com"}, "" + process.env.TOKEN_SECRET, {expiresIn: 1800});
  let start = {
    email: username,
      password: secret,
      token: coin,
      tokenTimer: 1800,
      driver: false,
      user: 01,
    };
  eventHelper.sendEvent("createUser", start);
  console.log("Signup successful");
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
