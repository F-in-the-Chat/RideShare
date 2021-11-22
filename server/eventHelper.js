const axios = require("axios");

//Function to send events to the event bus
//Import with const eventHelper = require(path/to/eventHelper.js)
function sendEvent(event_name,event_data,callback){ // name of event and data for event sent to eventbus.js
    axios.post("http://localhost:5002/events", {name: event_name,data:event_data}).catch((err) => { // look at eventbus.js
        console.log(err.message);
    }).then((res)=>{
      if(callback){
        callback.call(null,res)
      }
    });
  }
exports.sendEvent = sendEvent