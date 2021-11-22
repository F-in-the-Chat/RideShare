const express = require("express");
const axios = require("axios");
const app = express();
const { MongoClient } = require("mongodb");
const config = require("../appConfig.json")
const port = config.ports.joinRide;
const url = "mongodb+srv://testlogin.taf1q.mongodb.net/myFirstDatabase?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority";
const client = new MongoClient(url);
app.use(express.json());

app.listen(port, "0.0.0.0", () => {
  console.log(`Join Ride Service listening at http://localhost:${port}`);
  /*axios
    .post("http://localhost:5002/subscribe", {
      address: "http://localhost:5001/events",
      events: ["example"],
    })
    .catch((err) => {
      console.log(err.message);
    });*/
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
  dbAdd(user,ride)
  res.send({ status: "OK" });
});

app.post("/events", (req, res) => {
  console.log(req.body);
  res.send({ status: "OK" });
});

async function dbAdd(user,ride){
  const db = await client.connect();
  const query = {id:ride}
  let riderList = (db.collection('rides').findOne(query)["rides"]).push(user)
  const operation = { $set: { "riders": riderList }}
  db.collection('rides').updateOne(query,operation)
  client.close()
  console.log(user,ride)
}
