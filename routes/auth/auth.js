const express = require("express");
const eventHelper = require("../../server/eventHelper");
const axios = require("axios");
const app = express();
const cors = require("cors");
//const router = express.Router();
//const User = require("../../models/user.model");
const config = require("../appConfig.json");
const port = config.ports.auth;

app.use(express.json());
app.use(cors());

app.listen(port, "0.0.0.0", () => {
  console.log(`Auth Service listening at http://localhost:${port}`);
  axios
    .post("http://localhost:5002/subscribe", {
      address: `http://localhost:${port}/events`,
      events: ["example"],
    })
    .catch((err) => {
      console.log(err.message);
    });
});

app.post("/signup", (req, res) => {
  try {
    eventHelper.sendEvent("createUser", req.body);
    res.status(200).send("User signed up successfully.");
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post("/login", (req, res) => {
  //check username if username exists in database, checks password
  try {
    eventHelper.sendEvent("logging", req.body, (response) => {
      res.send(response.data.response_data);
    });
    res.status(200).send("Login successful");
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post("/logout", (req, res) => {
  try {
    eventHelper.sendEvent("deleteToken", req.body);
    res.status(200).send("Logout successful");
  } catch (err) {
    res.status(400).send(err);
  }
});
