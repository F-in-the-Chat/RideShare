const mongoose = require('mongoose');
const express = require("express");
const app = express();
const axios = require("axios");
const config = require("../appConfig.json")
const port = config.ports.database;
app.use(express.json());

const Ride = require("../../models/ride.model")
const User = require("../../models/user.model")

//Define Event Handlers here in the form "event name": handlerFunction
const eventHandlers = {
    "test":testEventHandler,
}

app.listen(port, "0.0.0.0", () => {
    console.log(`Database listening at http://localhost:${port}`);
});

app.post("/events", (req, res) => {
    const event = req.body;
    main(event)
    res.send({ status: "OK" });
});

//main().catch(err => console.log(err));

async function main(event) {
  await mongoose.connect('mongodb+srv://ChattingF:0fzcOCWGELSvm42D@testlogin.taf1q.mongodb.net/login?retryWrites=true&w=majority');
    eventHandlers[event.name].call(null,event)
}

function testEventHandler(event){
    let q = User.find({})
    q.exec((q,r)=>{console.log(r)})
}