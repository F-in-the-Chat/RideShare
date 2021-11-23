const mongoose = require("mongoose");
const express = require("express");
const app = express();
const axios = require("axios");
const config = require("../appConfig.json");
const port = config.ports.database;
app.use(express.json());

const Ride = require("../../models/ride.model");
const User = require("../../models/user.model");

//Define Event Handlers here in the form "event name": handlerFunction
const eventHandlers = {
  test: testEventHandler,
  createRide: createRide,
  Search: search,
  createUser: createUser,
  deleteToken: deleteToken,
  getRide: getRide,
  "joinRide":joinRide,
};

app.listen(port, "0.0.0.0", () => {
    console.log(`Database listening at http://localhost:${port}`);
});

app.post("/events", eventHandler);

async function eventHandler(req, res) {
    const event = req.body;
  let responseData = await main(event);
  responseData
    ? res.send({ status: "OK", response_data: responseData })
    : res.send({ status: "OK" });
}

async function main(event) {
  await mongoose.connect(
    "mongodb+srv://ChattingF:0fzcOCWGELSvm42D@testlogin.taf1q.mongodb.net/login?retryWrites=true&w=majority"
  );
  let data = eventHandlers[event.name].call(null, event);
  return data;
}

function testEventHandler(event) {
  let q = User.find({});
  q.exec((q, r) => {
    console.log(r);
  });
}

function createRide(event) {
    const ride = new Ride({
        title: event.data.ride.title,
        date: event.data.ride.date,
        pickup: event.data.ride.pickup,
        dropoff: event.data.ride.dropoff,
        capacity: event.data.ride.capacity,
        price: event.data.ride.price,
        preferences: event.data.ride.preferences,
    });
    //Save Ride in the database
  ride
    .save()
    .then((data) => {})
    .catch((err) => {
      console.log(err);
    });
  return { TEST: "DATA" };
}
            
function getRide(event) {
  Ride.find()
    .then((rides) => {
      res.send(rides);
        })
        .catch((err) => {
      res.status(500).send({
        message: err.message || "Something wrong while retrieving rides.",
        });
    });
}

async function joinRide(event) {
  let ride = await Ride.findById(event.data.ride).exec()
  ride.riders.push(event.data.user)
  ride.save()
}
function search(event) {
  const query = { email: event.data };
  let userInfo = db.collection("logging").find(query);
  return userInfo;
}

function createUser(event) {
  let start = event.data.start;
  const user = {
    email: start.email,
    password: start.password,
    token: start.token,
    tokenTimer: start.tokenTimer,
    driver: start.driver,
    user: start.user,
  };
  db.collection("users").InsertOne(user);
}

function deleteToken(event) {
  db.collection("logging").updateOne({ token: "", tokenTimer: 0 });
}
