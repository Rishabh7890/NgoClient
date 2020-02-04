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

class AdminHomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <MenuAppBar />
        <div className="App" align="center">
          <header className="App-header" style={buttonMarginStyle}>
            <Button variant="contained" color="default">
              <Link to="/adminusers">Manage Users</Link>
            </Button>
            <Button variant="contained" color="default">
              <Link to="/admindonations">View Donations</Link>
            </Button>
            <Button variant="contained" color="default">
              <Link to="/adminevents">Manage Events</Link>
            </Button>
          </header>
        </div>
      </React.Fragment>
    );
  }
}

export default AdminHomePage;
