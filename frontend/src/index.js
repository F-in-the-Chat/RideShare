import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import TokenContext from "./AppContext"

import "./index.css";
import App from "./App";

ReactDOM.render(
  // BrowserRouter watches our urls
  <BrowserRouter>
  <TokenContext.Provider value = "ContextValueTrue">
    <App />
  </TokenContext.Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
