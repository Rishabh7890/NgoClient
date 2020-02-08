import React, { Component } from "react";
import MenuAppBar from "../components/navbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
class NotFound extends Component {
  render() {
    return (
      <React.Fragment>
        <MenuAppBar />
        <div className="App" align="center">
          <h1>404 Error</h1>
          <h4>page not found </h4>
          {/* <Button variant="contained" color=""> */}
          <Link to="/" className="button btn btn-lg btn-warning">
            Return Home
          </Link>
          {/* </Button> */}
        </div>
      </React.Fragment>
    );
  }
}

export default NotFound;
