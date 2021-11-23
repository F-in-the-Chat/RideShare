import React from "react";
import SecondRideItem from "./SecondRideItem";
import classes from "./RideList.module.css";

function SecondRideList(props) {
  return (
    <ul className={classes.list}>
      {props.rides.map((ride) => (
        <SecondRideItem
          key={ride.id}
          id={classes.id}
          title={ride.title}
          date={ride.date}
          pickup={ride.pickup}
          dropoff={ride.dropoff}
          capacity={ride.capacity}
          price={ride.price}
          preferences={ride.preferences}
          deleteRide={props.deleteRide}
        />
      ))}
    </ul>
  );
}

export default SecondRideList;
