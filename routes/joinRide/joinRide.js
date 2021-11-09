const express = require("express");
const axios = require("axios");
const app = express();
const port = 5001;

app.use(express.json());

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${port}`);
  axios
    .post("http://localhost:5002/subscribe", {
      address: "http://localhost:5001/events",
      events: ["example"],
    })
    .catch((err) => {
      console.log(err.message);
    });
});

app.get("/join", (req, res) => {
  let user = req.query["user"];
  let ride = req.query["ride"];
  axios
    .post("http://localhost:5002/events", {
      name: "test",
      data: JSON.stringify({ user: user, ride: ride }),
    })
    .catch((err) => {
      console.log(err.message);
    });
  //Write user and ride to DB
  res.send({ status: "OK" });
});

app.post("/events", (req, res) => {
  console.log(req.body);
  res.send({ status: "OK" });
});
