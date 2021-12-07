import { useState, useEffect, useContext } from "react";
import TokenContext from "../AppContext";
import RideList from "../component/rides/RideList";
const axios = require("axios");

function joinRideHandler(ride, token) {
  console.log("inside joinRideHandler");
  axios
    .post("http://rs.res.tf:5001/joinRide", { ride: ride.id, user: token })
    .catch((err) => {
      console.log(err.message);
    });
}

function cancelRideHandler(ride, token) {
  console.log(ride);
  axios
    .post(`http://rs.res.tf:5007/cancelJoin`, { ride: ride.id, user: token })
    .catch((err) => {
      console.log(err.message);
    });
}
function deleteRideHandler(ride, token) {
  console.log(ride);
  axios
    .post(`http://rs.res.tf:5006/deleteRide`, { ride: ride.id, user: token })
    .catch((err) => {
      console.log(err.message);
    });
}

function Rides() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedRides, setLoadedRides] = useState([]);
  const [myRides, setMyRides] = useState([]);
  const [createRides, setCreateRides] = useState([]);
  const { tokenContext, setToken } = useContext(TokenContext);
  useEffect(() => {
    setIsLoading(true);
    let data = { user: tokenContext };
    axios
      .post("http://rs.res.tf:5005/getRides", data)
      .then((data) => {
        let rides = data.data;
        let userRides = [];
        for (const key in rides) {
          const ride = {
            id: key,
            ...rides[key],
          };

          userRides.push(ride);
        }
        setMyRides(userRides);
      })
      .catch((err) => {
        console.log(err.message);
      });
    axios
      .post("http://rs.res.tf:5005/getCreatedRides", data)
      .then((data) => {
        let rides = data.data;
        let userRides = [];
        for (const key in rides) {
          const ride = {
            id: key,
            ...rides[key],
          };

          userRides.push(ride);
        }
        setCreateRides(userRides);
      })
      .catch((err) => {
        console.log(err.message);
      });
    fetch("http://rs.res.tf:5005/getRide")
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
          <button
            class="nav-link"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="false"
          >
            My Rides
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="true"
          >
            Availible Rides
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#rides"
            type="button"
            role="tab"
            aria-controls="rides"
            aria-selected="false"
          >
            Created Rides
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <h1>My Rides:</h1>
          <RideList
            rides={myRides}
            button={"Cancel Ride"}
            submitHandler={cancelRideHandler}
          />
        </div>
        <div
          class="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <h1>Available Rides:</h1>
          <RideList
            rides={loadedRides}
            button={"Join Ride"}
            submitHandler={joinRideHandler}
          />
        </div>
        <div
          class="tab-pane fade"
          id="rides"
          role="tabpanel"
          aria-labelledby="rides-tab"
        >
          <h1>Created Rides:</h1>
          <RideList
            rides={createRides}
            button={"Delete Ride"}
            submitHandler={deleteRideHandler}
          />
        </div>
      </div>
    </section>
  );
}

export default Rides;
