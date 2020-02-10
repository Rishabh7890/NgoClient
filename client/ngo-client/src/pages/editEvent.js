import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import MenuAppBar from "../components/navbar";
import Addevent from "../components/addevent";
import EditEventForm from "../components/editEventForm";
import EditEventAlertDialog from "../components/editEventAlertDialog";

const buttonMarginStyle = {
  marginTop: "25px"
};

class EditEvent extends Component {
  _handleLogoutClick = () => {
    window.open("http://127.0.0.1:3000/", "_self");
  };

  render() {
    return (
      <React.Fragment>
        <MenuAppBar />
        <div className="App" align="center">
          <header className="App-header" style={buttonMarginStyle}>
            <EditEventForm />
            <EditEventAlertDialog />
          </header>
        </div>
      </React.Fragment>
    );
  }
}

export default EditEvent;
