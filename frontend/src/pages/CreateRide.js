import React from "react";
import { useHistory } from "react-router-dom";
import CreateRideForm from "../component/rides/CreateRideForm";

function CreateRide() {
  const history = useHistory();
  function createRideHandler(ride) {
    fetch("/createRide", {
      method: "POST",
      body: JSON.stringify(ride),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      // It should to /rides but as of now the default page is / so it'll go there
      history.replace("/");
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
