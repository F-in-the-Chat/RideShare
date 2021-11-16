const axios = require("axios");

//Function to send events to the event bus
//Import with const eventHelper = require(path/to/eventHelper.js)
function sendEvent(event_name,event_data){
    axios.post("http://localhost:5002/events", {name: event_name,data:event_data}).catch((err) => {
        console.log(err.message);
    });
  }
exports.sendEvent = sendEvent