import React, { Component } from "react";
import API from "../utils/API";
// css

export default class DataArea extends Component {
  state = {
    users: [{}],
    filterUsers: [{}],
  };

  componentDidMount() {
    API.getUsers().then((results) => {
      this.setState({
        users: results.data.results,
        filteredUsers: results.data.results,
        
      });
      console.log(results.data.results);
    });
  }

  render() {
    return <div></div>;
  }
}
