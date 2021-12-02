import React from "react";
import { useHistory } from "react-router-dom";
import CreateRideForm from "../component/rides/CreateRideForm";
const axios = require("axios");

function CreateRide() {
  const history = useHistory();
  function createRideHandler(ride, token) {
    axios
      .post("http://localhost:5003/createRide", { ride, token })
      .catch((err) => {
        console.log(err.message);
      })
      .then(() => {
        history.replace("/rides");
      });
  }
  return (
    <section>
      <h1>Create Ride </h1>
      <CreateRideForm onCreateRide={createRideHandler} />
    </section>
  );
}

export default CreateRide;
