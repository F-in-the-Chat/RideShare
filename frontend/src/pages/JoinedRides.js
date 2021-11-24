import React from "react";
const axios = require("axios");

// TODO: Frontend list, getting user and ride to be implemented

function JoinedRides() {
  function joinRideHandler(ride) {
    axios.post("http://localhost:5001/joinRide", { ride }).catch((err) => {
      console.log(err.message);
    });
  }

  function cancelJoinRideHandler(ride) {
    axios.post("http://localhost:5007/cancelJoin", { ride }).catch((err) => {
      console.log(err.message);
    });
  }

  return <div>Joined Rides Page</div>;
}

export default JoinedRides;
