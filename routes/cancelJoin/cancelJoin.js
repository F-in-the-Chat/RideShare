const express = require("express");
const axios = require("axios");
const app = express();
const eventHelper = require("../../server/eventHelper");
// const { MongoClient } = require("mongodb");
const config = require("../appConfig.json")
const port = config.ports.cancelJoin;
// const url = "mongodb+srv://testlogin.taf1q.mongodb.net/myFirstDatabase?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority";
// const client = new MongoClient(url);
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.listen(port, "0.0.0.0", () => {
  console.log(`Cancel Join Service listening at http://localhost:${port}`);
  axios
    .post("http://localhost:5002/subscribe", {
      address: "http://localhost:5001/events",
      events: ["example"],
    })
    .catch((err) => {
      console.log(err.message);
    });
});

// app.get("/cancel-join", (req, res) => {
//   let user = req.query["user"];
//   let ride = req.query["ride"];
//   axios
//     .post("http://localhost:5007/events", {
//       name: "test",
//       data: JSON.stringify({ user: user, ride: ride }),
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
//   //Write user and ride to DB
//   dbDelete(user,ride)
//   res.send({ status: "OK" });
// });

app.post("/cancelJoin", (req, res) => {
  console.log("inside /cancelJoin in cancelJoin.js")
  eventHelper.sendEvent(
    "cancelJoin",
    req.body
    // ,(resp)=>{
    //   //Callback code here
    // }
  );
});

// app.post("/events", (req, res) => {
//   console.log(req.body);
//   res.send({ status: "OK" });
// });

// async function dbDelete(user,ride){
//   const db = await client.connect();
//   const query = {id:ride};
//   let riderList = (db.collection('rides').findOne(query)["rides"]).pop(user);
//   const operation = { $set: { "riders": riderList }};
//   db.collection('rides').updateOne(query,operation);
//   client.close();
//   console.log(user,ride);
// }
