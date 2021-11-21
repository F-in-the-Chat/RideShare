import React, { useContext, useEffect } from "react";
import { Route, Switch } from "react-router";
import Rides from "./pages/Rides";
import CreateRide from "./pages/CreateRide";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import JoinedRides from "./pages/JoinedRides";
import Layout from "./component/layout/Layout";
import TokenContext from "./AppContext"
import DeleteRide from "./pages/DeleteRide";

function App() {
  const testContext = useContext(TokenContext)
  useEffect(()=>{
    console.log(testContext)
  })
  return (
    <Layout>
      <Switch>
        {/* When true, will only match if the path matches the location.pathname exactly. */}
        <Route path="/" exact>
          <Rides />
        </Route>
        <Route path="/create-ride">
          <CreateRide />
        </Route>
        <Route path="/joined-rides">
          <JoinedRides />
        </Route>
        <Route path="/delete-ride">
          <DeleteRide />
        </Route>
        <Route path="/login">
          <SignIn />
        </Route>
        <Route path="/join">
          <SignUp />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
