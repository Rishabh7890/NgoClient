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
import Header from "../components/header";

const buttonMarginStyle = {
  marginTop: "25px"
};

class UserHomePage extends Component {
  state = {
    user: {},
    error: null,
    authenticated: false
  };

  componentDidMount() {
    // Fetch does not send cookies. So you should add credentials: 'include'
    fetch("http://127.0.0.1:4000/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
      .then(response => {
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then(responseJson => {
        this.setState({
          authenticated: true,
          user: responseJson.user
        });
      })
      .catch(error => {
        this.setState({
          authenticated: false,
          error: "Failed to authenticate user"
        });
      });
  }
  render() {
    const { authenticated } = this.state;
    return (
      <React.Fragment>
        <MenuAppBar />
        <div>
          <Header
            authenticated={authenticated}
            handleNotAuthenticated={this._handleNotAuthenticated}
          />
          <div>
            {!authenticated ? (
              <h1>Welcome!</h1>
            ) : (
              <div>
                <h1>You have login succcessfully!</h1>
                <h2>Welcome {this.state.user.name}!</h2>
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
  _handleNotAuthenticated = () => {
    this.setState({ authenticated: false });
  };
}

export default UserHomePage;
