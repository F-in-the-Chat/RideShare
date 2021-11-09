const Ride = require("../../models/ride.model");
const express = require("express");
const app = express();

app.use(express.json());

app.post("/createRide", (req, res) => {
  if (!req.body.content) {
    return res.status(400).send({
      message: "Ride content cannot be empty",
    });
  }

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

  // Save Note in the database
  // ride.save()
  // .then(data => {
  //     res.send(data);
  // }).catch(err => {
  //     res.status(500).send({
  //         message: err.message || "Some error occurred while creating the Ride."
  //     });
  // });
});
