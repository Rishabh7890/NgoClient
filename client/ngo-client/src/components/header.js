import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Button } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
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
          <div></div>
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

        <Button variant="contained" color="primary">
          Login Facebook
          <FacebookIcon />
        </Button>

        <Button variant="contained" color="primary">
          Login Instagram
          <InstagramIcon />
        </Button>

        <Button variant="contained" color="primary">
          Login LinkedIn
          <LinkedInIcon />
        </Button>

        <Button variant="contained" color="primary">
          Login GitHub
          <GitHubIcon />
        </Button>

        {/* <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <a
                class="btn btn-block btn-social btn-google"
                href="/auth/google"
                role="button"
              >
                <i class="fab fa-google"></i>
                Sign In with Google
              </a>
              <a
                class="btn btn-block btn-social btn-twitter"
                href="/auth/twitter"
                role="button"
              >
                <i class="fab fa-twitter"></i>
                Sign In with Twitter
              </a>
              <a
                class="btn btn-block btn-social btn-instagram"
                href="/auth/instagram"
                role="button"
              >
                <i class="fab fa-instagram"></i>
                Sign In with Instagram
              </a>
            </div>
          </div>
        </div> */}
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
