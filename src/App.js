import React, { Component } from "react";
import axios from "axios";
export default class App extends Component {
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
        console.log(response.data.results);
        console.log(this.state.projects);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        {this.state.projects.map((project) => (
          <p>{project.name}</p>
        ))}
      </div>
    );
  }
}
