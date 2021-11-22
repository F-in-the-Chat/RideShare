const express = require("express");
const eventHelper = require("../../server/eventHelper")
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
  eventHelper.sendEvent("createRide",req.body,(resp)=>{
    //Callback code here
  })
})
  

/*app.post("/events", (req, res) => {
  console.log(req.body);
  res.send({ status: "OK" });
});*/
