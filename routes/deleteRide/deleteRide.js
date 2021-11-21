const Ride = require("../../models/ride.model");
const express = require("express");
const axios = require("axios");
const { MongoClient } = require("mongodb");
const client = new MongoClient(url);
const app = express();
const port = 5005;

app.use(express.json());

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${port}`);
  /*axios
    .post("http://localhost:5002/subscribe", {
      address: `http://localhost:${port}/events`,
      events: ["example"],
    })
    .catch((err) => {
      console.log(err.message);
    });*/
});

app.get("/delete-ride", (req, res) => {
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
    dbDelete(user,ride)
    res.send({ status: "OK" });
  });

app.post("/events", (req, res) => {
  console.log(req.body);
  res.send({ status: "OK" });
});

async function dbDelete(user,ride){
    const db = await client.connect();
    const query = {id:ride};
    db.collection('rides').remove(query);
    client.close();
    console.log(user,ride);
}
  