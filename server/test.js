const express = require("express");
const eventHelper = require("../server/eventHelper.js")
const app = express();
const axios = require("axios");
const port = 5003;

app.use(express.json())

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/test", (req, res) => {
    axios.post("http://localhost:5002/subscribe", {address: "http://localhost:5003/events",events:["example"]}).catch((err) => {
        console.log(err.message);
    });
    res.send({ status: "OK" });
});
app.get("/test2", (req, res) => {
  eventHelper.sendEvent("example",["example data"])
  res.send({ status: "OK" });
});
app.post("/events", (req, res) => {
  console.log(req.body)
  res.send({ status: "OK" });
});