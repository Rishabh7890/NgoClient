import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import UserTable from "../components/userTable";
import axios from "axios";
import DonationTable from "../components/donationTable";
import EventTable from "../components/eventTable";
import MenuAppBar from "../components/navbar";
// import "./App.css";
import Button from "@material-ui/core/Button";
import Loggin from "../components/loginForm";
import Adduser from "../components/Adduser";
import UserTemporaryDrawer from "../components/userSidebar";
import UserEventTable from "../components/userEventTable";
import UserHomePage from "./userHomePage";

const buttonMarginStyle = {
  marginTop: "25px"
};

class AdminEvents extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/events`).then(res => {
      const events = res.data;
      this.setState({ events });
    });
  }
  render() {
    return (
      <React.Fragment>
        <MenuAppBar />
        <div className="App" align="center">
          <header className="App-header" style={buttonMarginStyle}>
            <EventTable events={this.state.events} />
            <Button variant="contained" color="default">
              <Link to="/adminhomepage">Back</Link>
            </Button>
          </header>
        </div>
      </React.Fragment>
    );
  }
}

export default AdminEvents;