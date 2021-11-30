import { useState, useEffect, useContext } from "react";
import TokenContext from "../AppContext";
import RideList from "../component/rides/RideList";
const axios = require("axios");

function joinRideHandler(ride,token) {
    console.log("inside joinRideHandler")
    axios.post("http://localhost:5001/joinRide", { ride:ride.id,user:token }).catch((err) => {
        console.log(err.message);
    });
}

function cancelRideHandler(ride,token) {
  console.log(ride)
  axios.post(`http://localhost:5007/cancelJoin`, { ride:ride.id,user:token }).catch((err) => {
      console.log(err.message);
  });
}

function Rides() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedRides, setLoadedRides] = useState([]);
  const {tokenContext,setToken} = useContext(TokenContext)
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
  return (
    <section>
      {tokenContext!="null"?<div>
        <h1>My Rides:</h1>
        <RideList rides={[]} button={"Cancel Ride"} submitHandler={cancelRideHandler}/>
      </div>:null}
      <h1>Available Rides: -</h1>
      <RideList rides={loadedRides} button={"Join Ride"} submitHandler={joinRideHandler}/>
    </section>
  );
}

export default Rides;
