import React, { useContext } from "react";
import TokenContext from "../../AppContext";
import Card from "../ui/Card";
import classes from "./RideItem.module.css";

function RideItem(props) {
  const {tokenContext,setToken} = useContext(TokenContext)

  // will be using id to join, leave and delete ride
  function submitHandler(event) {
    event.preventDefault();
    const id = props.id;
    const ride = { id };
    props.submitHandler(ride,tokenContext);
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>Title : {props.title}</h3>
          <p>
            <strong> Date and Time: </strong>
            {props.date}
          </p>
          <address>
            {" "}
            <strong> Pickup: </strong>
            {props.pickup}
          </address>
          <address>
            <strong> Dropoff: </strong>
            {props.dropoff}
          </address>
          <p>
            <strong> Capacity: </strong>
            {props.capacity}
          </p>
          <p>
            <strong> Price: </strong>
            {props.price}
          </p>
          <p>
            <strong> Preferences: </strong>
            {props.preferences}
          </p>
        </div>
        <div className={classes.actions}>
          <button onClick={submitHandler}>{props.buttonText}</button>
        </div>
      </Card>
    </li>
  );
}

export default RideItem;
