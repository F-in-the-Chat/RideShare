const mongoose = require("mongoose");
const express = require("express");
const app = express();
const axios = require("axios");
const config = require("../appConfig.json");
const port = config.ports.database;
const bcrypt = require("bcrypt");
app.use(express.json());

const Ride = require("../../models/ride.model");
const User = require("../../models/user.model");

//Define Event Handlers here in the form "event name": handlerFunction
const eventHandlers = {
  test: testEventHandler,
  createRide: createRide,
  logging: logging,
  createUser: createUser,
  deleteToken: deleteToken,
  deleteRide: deleteRide,
  getRide: getRide,
  joinRide: joinRide,
  cancelJoin: cancelJoin,
  getUserRides: getUserRides,
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

async function createRide(event) {
  console.log(event);
  let user = await User.findOne({ token: event.data.token }).exec();
  console.log(user);
  const ride = new Ride({
    title: event.data.ride.title,
    date: event.data.ride.date,
    pickup: event.data.ride.pickup,
    dropoff: event.data.ride.dropoff,
    capacity: event.data.ride.capacity,
    price: event.data.ride.price,
    preferences: event.data.ride.preferences,
    creator: user,
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

async function deleteRide(event) {
  console.log("Inside deleteRide in db.js");
  console.log(event);
  try {
    await Ride.findByIdAndDelete(event.data.ride.id);
    return { STATUS: "OK" };
  } catch (e) {
    console.log(e);
    return { ERROR: e };
  }
}

async function getRide(event) {
  let rides = await Ride.find();
  return rides;
}

// joinRide - requires rideId and tokenId - tokenId will be converted to userId
async function joinRide(event) {
  console.log("Inside joinRide in db.js");

  let ride = await Ride.findById(event.data.ride).exec();
  let user = await User.findOne({ token: event.data.user }).exec();
  if (!ride.riders.includes(user._id)) {
    ride.riders.push(user._id);
    ride.save();
    user.rides.push(event.data.ride);
   user.save();
   }
}

// cancelJoin - requires rideId and tokenId - tokenId will be converted to userId
async function cancelJoin(event) {
  let ride = await Ride.findById(event.data.ride).exec();
  let user = await User.findOne({ token: event.data.user }).exec();
  ride.riders = ride.riders.filter((rider) => {
    rider != user._id;
  });
  ride.save();
}

async function logging(event) {
  let info;
  let validPassword;
  //console.log(event)
  try {
    info = await User.findOne({ email: event.data.email }).exec();
    if (!info) {
      return("Invalid Username")
      //throw new Error("User doesn't exist");
    }
    validPassword = await bcrypt.compare(event.data.password, info.password);
    //console.log(validPassword);
    if (!validPassword) {
      return("Invalid Password")
      //throw new Error("Password doesn't match");
    }
    let coin = await info.generateToken();
    return coin;
  } catch (e) {
    console.log(e);
  }
}

async function createUser(event) {
  console.log(event.data.email);

  let info;
  try {
    info = await User.findOne({ email: event.data.email }).exec();
    if (info) {
      throw new Error("User exist");
    } else {
      const user = new User({
        email: event.data.email,
        password: event.data.password,
        driver: event.data.driver,
      });

      user
        .save()
        .then((data) => {})
        .catch((err) => {
          console.log(err);
        });
    }
  } catch (e) {
    console.log(e);
  }
  return { TEST: "DATA" };
}

async function deleteToken(event) {
  let info;
  let empty = { token: "" };
  try {
    info = await User.findOneAndUpdate({ token: event.data.token }, empty, {
      new: true,
    }); // new set to true gives us info after the token is changed
  } catch (e) {
    console.log(e);
  }
}

async function getUserRides(event){
  let user = await User.findOne({token:event.data.user}).exec()
  let rides = user.rides
  let rideData = await Ride.find({_id:{$in:rides}}).exec()
  return rideData
}