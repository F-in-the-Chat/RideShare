import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import TokenContext from "../../AppContext";
// classes scopes the styles
import classes from "./Navbar.module.css";

function Navbar() {
  const {tokenContext,setToken} = useContext(TokenContext)
  function Logout(){
    axios.post("http://rs.res.tf:5004/logout",{token:tokenContext})
    setToken("null")
  }
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Reliable Rides</div>
      <nav>
        {tokenContext != "null" ?
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
              <Link to="/login" onClick={Logout}>Log Out</Link>
            </li>
          </ul>
          :
          <ul>
            <li>
              <Link to="/login">Log In</Link>
            </li>
          </ul>}
      </nav>
    </header>
  );
}

// line 27 "null" changed to ""

export default Navbar;
