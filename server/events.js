const express = require("express");
const app = express();
const axios = require("axios");
const port = 5002;
app.use(express.json());

let event_subs = {};

app.listen(port, "0.0.0.0", () => {
  console.log(`Event Bus listening at http://localhost:${port}`);
});
//Endpoint that recieves events and relays them to relevent microservices
app.post("/events", (req, res) => {
  const event = req.body;
  event_subs[event.name].forEach((sub) => {
    axios.post(sub, event).catch((err) => {
      console.log(err.message);
    });
  });
  res.send({ status: "OK" });
});
//Endpoint for microservices to subscribe to certain events
app.post("/subscribe", (req, res) => {
  const address = req.body.address;
  let events = req.body.events;
  events.forEach((event) => {
    event_subs[event] === undefined
      ? (event_subs[event] = [address])
      : event_subs[event].push(address);
  });
  console.log(event_subs);
  res.send({ status: "OK" });
});
