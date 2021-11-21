import React from "react";
import { useHistory } from "react-router-dom";
import CreateRideForm from "../component/rides/CreateRideForm";
const axios = require("axios");

function CreateRide() {
  const history = useHistory();
  function createRideHandler(ride) {
    // fetch("http://localhost:5003/createRide", {
    //   method: "POST",
    //   body: JSON.stringify(ride),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then(() => {
    //   // It should to /rides but as of now the default page is / so it'll go there
    //   history.replace("/rides");
    // });
    axios
      .post("http://localhost:5003/createRide", {
        ride,
      })
      .catch((err) => {
        console.log(err.message);
      })
      .then(() => {
        // It should to /rides but as of now the default page is / so it'll go there
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
