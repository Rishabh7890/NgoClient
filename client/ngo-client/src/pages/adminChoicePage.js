import React, { Component } from "react";
import { Link } from "react-router-dom";
import MenuAppBar from "../components/navbar";
import Button from "@material-ui/core/Button";

const buttonMarginStyle = {
  marginTop: "25px"
};

class AdminChoicePage extends Component {
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

  _handleLogoutClick = () => {
    window.open("http://127.0.0.1:3000/", "_self");
  };
}

export default AdminChoicePage;
