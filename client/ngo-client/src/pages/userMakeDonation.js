import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import MenuAppBar from "../components/navbar";
import Button from "@material-ui/core/Button";
import Addevent from "../components/addevent";
import AddDonation from "../components/addDonation";
import DonationAlertDialog from "../components/donationAlertDialogBox";

const buttonMarginStyle = {
  marginTop: "25px"
};

class UserMakeDonation extends Component {
  _handleLogoutClick = () => {
    window.open("http://127.0.0.1:3000/", "_self");
  };

  render() {
    return (
      <React.Fragment>
        <MenuAppBar />
        <div className="App" align="center">
          <header className="App-header" style={buttonMarginStyle}>
            <AddDonation />
            {/* <Button variant="contained" color="default">
              <Link to="/usereventpage">Back</Link>
            </Button> */}
            <DonationAlertDialog />
          </header>
        </div>
      </React.Fragment>
    );
  }
}

export default UserMakeDonation;
