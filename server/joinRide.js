const express = require("express");
const app = express();
const port = 5001;

app.use(express.json())

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/join", (req, res) => {
    let user = req.body["user"]
    let ride = req.body["ride"]
    //Write user and ride to DB
    //Send event for ride joined
    res.send({ Status: "Success" });
});