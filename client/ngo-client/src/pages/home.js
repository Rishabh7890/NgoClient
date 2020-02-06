import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import MenuAppBar from "../components/navbar";
import Button from "@material-ui/core/Button";


const buttonMarginStyle = {
  marginTop: "25px"
};

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <MenuAppBar />
        <div className="App" align="center">
          <header className="App-header" style={buttonMarginStyle}>
            <Button variant="contained" color="default">
              <Link to="/userhomepage">User</Link>
            </Button>
            <Button variant="contained" color="default">
              <Link to="/adminhomepage">Admin</Link>
            </Button>
          </header>
        </div>
      </React.Fragment>
    );
  }
  _handleNotAuthenticated = () => {
    this.setState({ authenticated: false });
  };
}

export default HomePage;
