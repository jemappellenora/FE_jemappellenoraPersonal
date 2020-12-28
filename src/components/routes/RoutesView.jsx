import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomeContainer, ProfileContainer } from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route
        exact
        path="/FE_jemappellenoraPersonal/"
        component={HomeContainer}
      />
      <Route exact path="/" component={ProfileContainer} />
    </Switch>
  );
};

export default RoutesView;
