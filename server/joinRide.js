const express = require("express");
const app = express();
const port = 5001;

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/join", (req, res) => {
  res.send({ Hello: "World" });
});