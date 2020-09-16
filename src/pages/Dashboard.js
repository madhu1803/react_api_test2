import React, { Component } from "react";
import axios from "axios";
import Dcard from "../components/Dcard";
export default class Dashboard extends Component {
  state = {
    projects: [],
  };
  componentDidMount() {
    axios({
      method: "get",
      url: "https://gprs-api.geopits.com/project/projects/",
      headers: {
        Authorization: "sessionid 5qmqi64um7exay2suj88a1f6xywr37kr",
      },
    })
      .then((response) => {
        this.setState({
          ...this.state,
          projects: response.data.results,
        });
        console.log(this.state.projects);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="text-captalize dashboard-container">
        <div className="dashboard-header">
          <p>Dashboard/projects</p>
          <p>
            <strong>List of projects</strong>
          </p>
          <p>
            <strong>Welcome to test client </strong>
          </p>
        </div>
        <div className="row">
          {this.state.projects.map((project) => (
            <div className="col-lg-3">
              <Dcard project={project} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
