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
  const [myRides, setMyRides] = useState([]);
  const {tokenContext,setToken} = useContext(TokenContext)
  useEffect(() => {
    setIsLoading(true);
    let data = {user:tokenContext}
    axios.post("http://localhost:5005/getRides", data).then((data)=>{
      let rides = data.data
      let userRides = []
      for (const key in rides) {
        const ride = {
          id: key,
          ...rides[key],
        };

        userRides.push(ride);
      }
      setMyRides(userRides)

    })
    .catch((err) => {
      console.log(err.message)
  });
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
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">My Rides</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Availible Rides</button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          <h1>My Rides:</h1>
          <RideList rides={myRides} button={"Cancel Ride"} submitHandler={cancelRideHandler}/>
        </div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <h1>Available Rides:</h1>
          <RideList rides={loadedRides} button={"Join Ride"} submitHandler={joinRideHandler}/>
        </div>
      </div>
    </section>
  );
}

export default Rides;
