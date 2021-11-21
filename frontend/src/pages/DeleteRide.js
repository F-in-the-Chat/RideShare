import React from "react";
import SecondRideList from "../component/rides/SecondRideList";

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
  

function DeleteRide() {
    //have to display rides created by authenticated user - displaying dummy rides for now
    return (
        <section>
            <h1>Available Rides</h1>
            <SecondRideList rides={dummy} />
        </section>
    );
}

export default DeleteRide;