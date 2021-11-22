const Ride = require("../../models/ride.model");
const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
const config = require("../appConfig.json")
const port = config.ports.createRide;

app.use(express.json());
app.use(cors());

app.listen(port, "0.0.0.0", () => {
  console.log(`Create Ride Service listening at http://localhost:${port}`);
  axios
    .post("http://localhost:5002/subscribe", {
      address: `http://localhost:${port}/events`,
      events: ["example"],
    })
    .catch((err) => {
      console.log(err.message);
    });
});

app.post("/createRide", (req, res) => {
  console.log(req.body);

  // Create Ride
  const ride = new Ride({
    title: req.body.title,
    date: req.body.date,
    pickup: req.body.pickup,
    dropoff: req.body.dropoff,
    capacity: req.body.capacity,
    price: req.body.price,
    preferences: req.body.preferences,
  });

  // Save Ride in the database
  // ride
  //   .save()
  //   .then((data) => {
  //     res.send(data);
  //   })
  //   .catch((err) => {
  //     res.status(500).send({
  //       message: err.message || "Some error occurred while creating the Ride.",
  //     });
  //   });
});

app.post("/events", (req, res) => {
  console.log(req.body);
  res.send({ status: "OK" });
});
