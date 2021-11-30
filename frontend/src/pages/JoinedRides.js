import React from "react";
import { useState, useEffect } from "react";
import RideList from "../component/rides/RideList";
const axios = require("axios");

// TODO: Frontend list, getting user and ride to be implemented

function cancelJoinRideHandler(ride) {
    axios.post("http://localhost:5007/cancelJoin", { ride }).catch((err) => {
        console.log(err.message);
    });
}

function JoinedRides() {
    const [isLoading, setIsLoading] = useState(true);
    const [joinedRides, setLoadedRides] = useState([]);
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
      <h1>All the rides you have currently joined: -</h1>
      <RideList rides={joinedRides} button = {"Leave Ride"} submitHandler2 = {cancelJoinRideHandler} />
    </section>
  )
}

export default JoinedRides;
