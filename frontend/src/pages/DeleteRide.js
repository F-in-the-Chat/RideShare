import { useState, useEffect } from "react";
// import SecondRideList from "../component/rides/SecondRideList";
const axios = require("axios");

// HAVE TO EDIT THIS SUCH THAT WE GET THE RIDES MADE BY THE PARTICULAR USER - JUST DISPLAYING ALL RIDES FOR NOW
// MIGHT HAVE TO LINK RIDES WITH USERS (ESPECIALLY DRIVERS)
function DeleteRide() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedRides, setLoadedRides] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5005/getRide")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const rides = [];
        for (const key in data) {
          const ride = {
            id: key,
            ...data[key],
          };

          rides.push(ride);
        }
        setIsLoading(false);
        setLoadedRides(rides);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  function deleteRideHandler(ride) {
    // deleting ride using title name only
    axios.post("http://localhost:5006/deleteRide", { ride }).catch((err) => {
      console.log(err.message);
    });
  }

  return (
    <section>
      <h1>Rides Created by You</h1>
      {/* <SecondRideList rides={loadedRides} deleteRide={deleteRideHandler} /> */}
    </section>
  );
}

export default DeleteRide;
