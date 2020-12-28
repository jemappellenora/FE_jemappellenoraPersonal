import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  HomeContainer,
  ProfileContainer,
  ExperiencesContainer,
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route
        exact
        path="/FE_jemappellenoraPersonal/"
        component={HomeContainer}
      />
      <Route exact path="/" component={ProfileContainer} />
      <Route exact path="/experiences/" component={ExperiencesContainer} />
    </Switch>
  );
};

export default RoutesView;
