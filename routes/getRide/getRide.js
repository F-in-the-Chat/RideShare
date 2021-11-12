const express = require("express");
const axios = require("axios");
const app = express();
const port = 5004;

app.use(express.json());

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${port}`);
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
  Product.find()
    .then((products) => {
      res.send(products);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Something wrong while retrieving products.",
      });
    });
});

app.post("/events", (req, res) => {
  console.log(req.body);
  res.send({ status: "OK" });
});
