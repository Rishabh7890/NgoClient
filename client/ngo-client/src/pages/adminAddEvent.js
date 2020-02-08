import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import MenuAppBar from "../components/navbar";
import Addevent from "../components/addevent";
import EventAlertDialog from "../components/alertDialogBox";

const buttonMarginStyle = {
  marginTop: "25px"
};

class AdminAddEvent extends Component {
  _handleLogoutClick = () => {
    window.open("http://127.0.0.1:3000/", "_self");
  };

  render() {
    return (
      <React.Fragment>
        <MenuAppBar />
        <div className="App" align="center">
          <header className="App-header" style={buttonMarginStyle}>
            <Addevent />
            <EventAlertDialog />
          </header>
        </div>
      </React.Fragment>
    );
  }
}

export default AdminAddEvent;
