import React, { useContext } from "react";
import { Link } from "react-router-dom";
import TokenContext from "../../AppContext";
// classes scopes the styles
import classes from "./Navbar.module.css";

function Navbar() {
  const {tokenContext,setToken} = useContext(TokenContext)
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
            {tokenContext=="null"?<Link to="/login">Log In</Link>:<a onClick={()=>{setToken("null")}}>Log Out</a>}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
