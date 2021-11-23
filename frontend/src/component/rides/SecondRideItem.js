import React from "react";
import Card from "../ui/Card";
import classes from "./RideItem.module.css";

function SecondRideItem(props) {

  const rideTitle = props.title;

  function submitHandler() {
    const rideToDelete = {rideTitle};
    console.log(rideToDelete);
    props.deleteRide(rideToDelete);
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.date}</p>
          <address>{props.pickup}</address>
          <address>{props.dropoff}</address>
          <p>{props.capacity}</p>
          <p>{props.price}</p>
          <p>{props.preferences}</p>
        </div>
        <div className={classes.actions}>
          <button onClick = {submitHandler}>Delete Ride</button>
        </div>
      </Card>
    </li>
  );
}

export default SecondRideItem;
