import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import EventTable from "../components/eventTable";
import MenuAppBar from "../components/navbar";
import Button from "@material-ui/core/Button";

const buttonMarginStyle = {
  marginTop: "25px"
};

class AdminEvents extends Component {
  _handleLogoutClick = () => {
    window.open("http://127.0.0.1:3000/", "_self");
  };

  render() {
    return (
      <React.Fragment>
        <MenuAppBar />
        <div className="App" align="center">
          <header className="App-header" style={buttonMarginStyle}>
            <EventTable />
            <Button variant="contained" color="default">
              <Link to="/adminchoicepage">Back</Link>
            </Button>
            <Button variant="contained" color="default">
              <Link to="/adminaddevent">Add An Event</Link>
            </Button>
          </header>
        </div>
      </React.Fragment>
    );
  }
}

export default AdminEvents;
