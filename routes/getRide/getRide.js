const express = require("express");
const axios = require("axios");
const app = express();
const config = require("../appConfig.json");
const port = config.ports.getRide;
const Ride = require("../../models/ride.model");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.listen(port, "0.0.0.0", () => {
  console.log(`Get Ride Service listening at http://localhost:${port}`);
  axios
    .post("http://localhost:5002/subscribe", {
      address: `http://localhost:${port}/events`,
      events: ["example"],
    })
    .catch((err) => {
      console.log(err.message);
    });
});

app.get("/getRide", (req, res) => {
  Ride.find()
    .then((rides) => {
      res.send(rides);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Something wrong while retrieving rides.",
      });
    });
});

app.post("/events", (req, res) => {
  console.log(req.body);
  res.send({ status: "OK" });
});
