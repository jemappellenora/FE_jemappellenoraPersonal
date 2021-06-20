import React from "react";
import {icompostNyc, ecoCarrot} from "../images"

const ProjectView = () => {
  return (
    <div>
      <h3>Selected Projects</h3>
      <div className="card">
          <table className="table" style={{textAlign:"center"}}>
          <tr>
            <td>
              <a href="https://www.icompost.info/">
                <img src={icompostNyc} className="projectImg"></img>
              </a> 
            </td>
            <td>
              <a href="https://eco-carrot.web.app/">
                <img src={ecoCarrot} className="projectImg"></img>
              </a> 
            </td>
          </tr>
          <tr>
            <td>
            <div>
                <a href="https://www.icompost.info/logIn" className="mylinks">
                  ICompostNyc
                </a>
              </div>
            
            </td>
            <td>
            <div>
              <div>
                <a href="https://github.com/eco-carrot/ttp-capstone-ecommerce-client" className="mylinks">
                  Eco-Carrot : Front-End Source Code
                </a>
              </div>
              <div>
                <a href="https://github.com/eco-carrot/ttp-capstone-ecommerce-server" className="mylinks">
                Eco-Carrot : Back-End Source Code
                </a>
              </div>
            </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ProjectView;
