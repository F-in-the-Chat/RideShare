import { useState, useEffect } from "react";
import RideList from "../component/rides/RideList";
const axios = require("axios");

// const dummy = [
//   {
//     id: "sdfnmsdklfnmsdlf",
//     title: "Ride 1",
//     date: "some date",
//     pickup: "dfsd",
//     dropoff: "sdfsdfsd",
//     car_capacity: 4,
//     price: 35,
//     preferences: "sdfsdnfksdjf",
//     creator: "sdfsd",
//   },
//   {
//     id: "sdfgsdg",
//     title: "Ride 2",
//     date: "some date",
//     pickup: "sfgdfg",
//     dropoff: "sdfgsdrfh",
//     car_capacity: 4,
//     price: 35,
//     preferences: "sdfgsdtgnfksdjf",
//     creator: "Sdfsdf",
//   },
// ];

// function Rides() {
//   return (
//     <section>
//       <h1>Available Rides</h1>
//       <RideList rides={dummy} />
//     </section>
//   );
// }

function Rides() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedRides, setLoadedRides] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:5005/getRide")
      // .then((res) => {
      //   res.json();
      // })
      .then((data) => {
        const rides = [];
        console.log(typeof data);
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
      <h1>Available Rides</h1>
      <RideList rides={loadedRides} />
    </section>
  );
}

export default Rides;
