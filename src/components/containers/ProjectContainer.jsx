import React, { Component } from "react";
import { ProjectView } from "../views";
import { Ching_Wing_Nora_Lau_Resume } from "../images";

class ProjectContainer extends Component {
  render() {
    return (
      <div>
        <img alt="resume" source={Ching_Wing_Nora_Lau_Resume}/>
        <ProjectView />
      </div>
    );
  }
}

export default ProjectContainer;
