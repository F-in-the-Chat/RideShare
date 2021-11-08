const express = require("express");
const app = express();
const port = 5000;

// All the routes would be added here example:
// const createRideRoute = require('../routes/createRide/createRide')

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send({ Hello: "World" });
});
