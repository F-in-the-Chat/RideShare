import { useState, useEffect } from "react";
import RideList from "../component/rides/RideList";
const axios = require("axios");

function joinRideHandler(ride) {
    console.log("inside joinRideHandler")
    axios.post("http://localhost:5001/joinRide", { ride }).catch((err) => {
        console.log(err.message);
    });
}

function Rides() {
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
        console.log(data);
        for (const key in data) {
          const ride = {
            id: key,
            ...data[key],
          };

          rides.push(ride);
          console.log(rides[0]);
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
  return (
    <section>
      <h1>Available Rides: -</h1>
      <RideList rides={loadedRides} button={"Join Ride"} submitHandler={joinRideHandler}/>
    </section>
  );
}

export default Rides;
