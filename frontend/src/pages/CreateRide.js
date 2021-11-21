import React from "react";
import CreateRideForm from "../component/rides/CreateRideForm";

function CreateRide() {
  function createRideHandler(ride) {
    fetch("/createRide", {
      method: "POST",
      body: JSON.stringify(ride),
      headers: {
        "Content-Type": "application/json",
      },
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
