import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  ProjectContainer,
  ProfileContainer,
  ExperiencesContainer,
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route
        exact
        path="/FE_jemappellenoraPersonal/"
        component={ProfileContainer}
      />
      <Route exact path="/projects/" component={ProjectContainer} />
      <Route exact path="/experiences/" component={ExperiencesContainer} />
    </Switch>
  );
};

export default RoutesView;
