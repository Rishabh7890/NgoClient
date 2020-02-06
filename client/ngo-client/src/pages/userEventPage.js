import React, { Component } from "react";
import axios from "axios";
import MenuAppBar from "../components/navbar";
// import "./App.css";
import Button from "@material-ui/core/Button";
import Loggin from "../components/loginForm";
import UserEventTable from "../components/userEventTable";

let url = `http://localhost:8080/events`;

class UserEventPage extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    axios.get(url).then(res => {
      const events = res.data;
      this.setState({ events });
    });
  }

  _handleLogoutClick = () => {
    window.open("http://127.0.0.1:3000/", "_self");
  };

  render() {
    return (
      <React.Fragment>
        <MenuAppBar />
        <Button
          variant="contained"
          color="secondary"
          onClick={this._handleLogoutClick}
        >
          Logout
        </Button>
        <UserEventTable events={this.state.events} />
        <hr />
      </React.Fragment>
    );
  }
}

export default UserEventPage;
