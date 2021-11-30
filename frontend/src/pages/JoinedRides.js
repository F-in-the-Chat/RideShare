import { useState, useEffect } from "react";
import RideList from "../component/rides/RideList";
const axios = require("axios");

function cancelJoinHandler(ride) {
    console.log("inside cancelJoinhandler")
    axios.post("http://localhost:5007/cancelJoin", { ride }).catch((err) => {
        console.log(err.message);
    });
}

// TODO: HAVE TO CHANGE FETCH - SHOULD ONLY GET THE RIDES THAT THE USER JOINED
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
      <h1>Your Rides: - </h1>
      <RideList rides={loadedRides} button={"Leave Ride"} submitHandler={cancelJoinHandler}/>
    </section>
  );
}

export default Rides;
