import React, { Component } from "react";
import API from "../utils/API";
// css

export default class DataArea extends Component {
  state = {
    users: [{}],
    order: "descend",
    filterUsers: [{}],
  };

//   headings = [
//     { name: "Image", width: "10%" },
//     { name: "Name", width: "10%" },
//     { name: "Phone", width: "20%" },
//     { name: "Email", width: "20%" },
//     { name: "DOB", width: "10%" },
//   ];

//   handleSort = (heading) => {
//     if (this.state.order === "descend") {
//       this.setState({
//         order: "ascend",
//       });
   
//     } else {
//       this.setState({
//         order: "descend",
//       });
//     }
//   };

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
    return (
      <>
        <div className="data-area">
          {/* headings={this.headings} */}
          users={this.state.filteredUsers}
          {/* handleSort={this.handleSort} */}
        </div>
      </>
    );
  }
}
