import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Button } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";

export default class Header extends Component {
  static propTypes = {
    authenticated: PropTypes.bool.isRequired
  };

  render() {
    const { authenticated } = this.props;
    return (
      <React.Fragment>
        <Button variant="contained" color="default">
          <Link to="/">
            <HomeIcon />
          </Link>
        </Button>

        {authenticated ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={this._handleLogoutClick}
          >
            Logout
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={this._handleSignInClick}
          >
            Login Twitter
            <TwitterIcon />
          </Button>
        )}
      </React.Fragment>
    );
  }

  _handleSignInClick = () => {
    // Authenticate using via passport api in the backend
    // Open Twitter login page
    // Upon successful login, a cookie session will be stored in the client
    window.open("http://127.0.0.1:4000/auth/twitter", "_self");
  };

  _handleLogoutClick = () => {
    // Logout using Twitter passport api
    // Set authenticated state to false in the HomePage
    window.open("http://127.0.0.1:4000/auth/logout", "_self");
    this.props.handleNotAuthenticated();
  };
}
