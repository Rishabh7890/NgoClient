import React, { Component } from "react";
import axios from "axios";
import MenuAppBar from "../components/navbar";
// import "./App.css";
import Button from "@material-ui/core/Button";
import Loggin from "../components/loginForm";
import UserEventTable from "../components/userEventTable";

let url = `http://localhost:8080/events`;

class UserHomePage extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    axios.get(url).then(res => {
      const events = res.data;
      this.setState({ events });
    });
  }

  render() {
    return (
      <React.Fragment>
        <MenuAppBar />
        <UserEventTable events={this.state.events} />
        <hr />
        {/* <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            this.handleBackClick();
          }}
        >
          Back
        </Button> */}
      </React.Fragment>
    );
  }
}

export default UserHomePage;
