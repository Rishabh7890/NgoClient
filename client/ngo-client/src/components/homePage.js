import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import MenuAppBar from "../components/navBar";
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
                    <header className="App-header" style={buttonMarginStyle} to="/userhomepage">
                        <Button variant="contained" color="default">
                            userhomepage
                        </Button>
                        <Button variant="contained" color="default">
                            <Link to="/adminhomepage">Admin</Link>
                        </Button>
                    </header>
                </div>
            </React.Fragment>
        );
    }
}

export default HomePage;
