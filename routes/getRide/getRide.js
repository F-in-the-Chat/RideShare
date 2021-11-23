const express = require("express");
const axios = require("axios");
const app = express();
const config = require("../appConfig.json");
const port = config.ports.getRide;
const Ride = require("../../models/ride.model");
const cors = require("cors");
const eventHelper = require("../../server/eventHelper")

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
  eventHelper.sendEvent("getRide",req.body,(response)=>{
    res.send(response.data.response_data)
  })
});

app.post("/events", (req, res) => {
  console.log(req.body);
  res.send({ status: "OK" });
});
