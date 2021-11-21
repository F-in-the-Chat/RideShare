import React from "react";
import Card from "../ui/Card";
import classes from "./RideItem.module.css";

function SecondRideItem(props) {
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
          <button>Delete Ride</button>
        </div>
      </Card>
    </li>
  );
}

export default SecondRideItem;
