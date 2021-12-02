import React, { useRef, useContext } from "react";
import Card from "../ui/Card";
import classes from "./CreateRideForm.module.css";
import TokenContext from "../../AppContext";

function CreateRideForm(props) {
  // Retrieve data from in the input fields once
  const titleElRef = useRef();
  const dateElRef = useRef();
  const pickupElRef = useRef();
  const dropoffElRef = useRef();
  const capacityElRef = useRef();
  const priceElRef = useRef();
  const preferencesElRef = useRef();
  const { tokenContext, setToken } = useContext(TokenContext);

  const submiteHandler = (event) => {
    // Prevents browser default
    event.preventDefault();
    const title = titleElRef.current.value;
    const date = dateElRef.current.value;
    const pickup = pickupElRef.current.value;
    const dropoff = dropoffElRef.current.value;
    const capacity = +capacityElRef.current.value;
    const price = +priceElRef.current.value;
    const preferences = preferencesElRef.current.value;

    const ride = { title, date, pickup, dropoff, capacity, price, preferences };
    console.log(ride);
    console.log("My token: " + tokenContext);
    props.onCreateRide(ride, tokenContext);
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submiteHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" required id="title" ref={titleElRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="date">Date</label>
          <input
            type="datetime-local"
            required
            id="date"
            ref={dateElRef}
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="pickup">Pickup Location</label>
          <input type="text" required id="pickup" ref={pickupElRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="dropoff">Dropoff Location</label>
          <input type="text" required id="dropoff" ref={dropoffElRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="capacity">Capacity</label>
          <input
            type="number"
            required
            id="capacity"
            ref={capacityElRef}
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="price">Price</label>
          <input type="number" required id="price" ref={priceElRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="preferences">Preferences</label>
          <textarea
            rows="4"
            required
            id="preferences"
            ref={preferencesElRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Create Ride</button>
        </div>
      </form>
    </Card>
  );
}

export default CreateRideForm;
