import React from "react";
import { Route, Switch } from "react-router";
import Rides from "./pages/Rides";
import CreateRide from "./pages/CreateRide";
import JoinedRides from "./pages/JoinedRides";
import Layout from "./component/layout/Layout";

function App() {
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
      </Switch>
    </Layout>
  );
}

export default App;
