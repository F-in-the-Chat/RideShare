import React from "react";
import { Link } from "react-router-dom";
// classes scopes the styles
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Reliable Rides</div>
      <nav>
        <ul>
          <li>
            <Link to="/rides">Rides</Link>
          </li>
          <li>
            <Link to="/create-ride">Create Ride</Link>
          </li>
          <li>
            <Link to="/joined-rides">Joined Rides</Link>
          </li>
          <li>
            <Link to="/delete-ride">Delete Rides</Link>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
