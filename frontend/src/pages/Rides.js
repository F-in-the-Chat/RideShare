import React from "react";
import RideList from "../component/rides/RideList";

const dummy = [
  {
    id: "sdfnmsdklfnmsdlf",
    title: "Ride 1",
    date: "some date",
    pickup: "dfsd",
    dropoff: "sdfsdfsd",
    car_capacity: 4,
    price: 35,
    preferences: "sdfsdnfksdjf",
    creator: "sdfsd",
  },
  {
    id: "sdfgsdg",
    title: "Ride 2",
    date: "some date",
    pickup: "sfgdfg",
    dropoff: "sdfgsdrfh",
    car_capacity: 4,
    price: 35,
    preferences: "sdfgsdtgnfksdjf",
    creator: "Sdfsdf",
  },
];

function Rides() {
  return (
    <section>
      <h1>Available Rides</h1>
      <RideList rides={dummy} />
    </section>
  );
}

export default Rides;
