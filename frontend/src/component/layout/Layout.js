import React, { useState } from "react";
import Navbar from "./Navbar";
import classes from "./Layout.module.css";
import TokenContext from "../../AppContext";

function Layout(props) {
  const [tokenContext,setToken] = useState("null")
  const value = {tokenContext,setToken}
  return (
    <TokenContext.Provider value={value}>
      <div>
        <Navbar />
        <main className={classes.main}>{props.children}</main>
      </div>
    </TokenContext.Provider>
  );
}

export default Layout;
