import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import MenuAppBar from "../components/navbar";
import Button from "@material-ui/core/Button";
import Loggin from "../components/loginForm";
import HomeIcon from "@material-ui/icons/Home";
import ReduxLogin from "../components/reduxLogin";
import MostafaLogin from "../components/mostagaLogin";

const buttonMarginStyle = {
  marginTop: "25px"
};

class UserHomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <MenuAppBar />
        <Button variant="contained" color="default">
          <Link to="/">
            <HomeIcon />
          </Link>
        </Button>
        <div>
          <div style={{ marginBottom: "25px" }}>
            <hr />
            <h1>
              Please Log In Using Your Admin NGO-Donations Credentials Below
            </h1>
          </div>
        </div>
        <div className="">
          <Loggin />
          {/* <MostafaLogin />{" "} */}
        </div>
      </React.Fragment>
    );
  }
}

export default UserHomePage;
