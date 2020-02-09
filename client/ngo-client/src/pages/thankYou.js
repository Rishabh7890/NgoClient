import React, { Component } from "react";
import MenuAppBar from "../components/navbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
class ThankYou extends Component {
  render() {
    return (
      <React.Fragment>
        <MenuAppBar />
        <div className="App" align="center">
          <h1>Thank You For Making A Donation!</h1>
          <h4>Your Generosity Is Very Appreciated. </h4>
          {/* <Button variant="contained" color=""> */}
          <Link to="/usereventpage" className="button btn btn-lg btn-warning">
            Return To Events
          </Link>
          {/* </Button> */}
        </div>
      </React.Fragment>
    );
  }
}

export default ThankYou;
