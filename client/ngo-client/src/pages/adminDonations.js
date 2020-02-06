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

class AdminDonations extends Component {
  state = {
    donations: []
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/donations`).then(res => {
      const donations = res.data;
      this.setState({ donations });
    });
  }

  _handleLogoutClick = () => {
    window.open("http://127.0.0.1:3000/", "_self");
  };

  render() {
    return (
      <React.Fragment>
        <MenuAppBar />
        <div className="App" align="center">
          <header className="App-header" style={buttonMarginStyle}>
            <DonationTable donations={this.state.donations} />
            <Button variant="contained" color="default">
              <Link to="/adminchoicepage">Back</Link>
            </Button>
          </header>
        </div>
      </React.Fragment>
    );
  }
}

export default AdminDonations;
