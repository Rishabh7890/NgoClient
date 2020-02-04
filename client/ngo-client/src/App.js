import React, { Component } from "react";
import UserTable from "./components/userTable";
import axios from "axios";
import DonationTable from "./components/donationTable";
import EventTable from "./components/eventTable";
import MenuAppBar from "./components/navbar";
// import "./App.css";
import Button from "@material-ui/core/Button";
import TemporaryDrawer from "./components/sidebar";
import Loggin from "./components/loginForm";
import Adduser from "./components/Adduser";
import UserTemporaryDrawer from "./components/userSidebar";
import UserEventTable from "./components/userEventTable";
import Addevent from "./addevent";

let one = `http://localhost:8080/users`;
let two = `http://localhost:8080/donations`;
let three = `http://localhost:8080/events`;

const requestOne = axios.get(one);
const requestTwo = axios.get(two);
const requestThree = axios.get(three);

const buttonMarginStyle = {
  marginTop: "25px"
};

class App extends Component {
  state = {
    users: [],
    donations: [],
    events: [],
    username: "",
    pageContent: "none"
  };

  componentDidMount() {
    axios
      .all([requestOne, requestTwo, requestThree])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];
          const responesThree = responses[2];

          const users = responseOne.data;
          const donations = responseTwo.data;
          const events = responesThree.data;

          console.log(users);
          console.log(donations);
          console.log(events);

          this.setState({ users });
          this.setState({ donations });
          this.setState({ events });
        })
      )
      .catch(errors => {
        console.log(errors);
      });
  }

  handleUserPortalClick() {
    this.setState({ pageContent: "userEvents" });
    console.log(this.state.pageContent);
  }

  handleAdminPortalClick() {
    this.setState({ pageContent: "adminManageUsers" });
    console.log(this.state.pageContent);
  }

  handleBackClick() {
    this.setState({ pageContent: "none" });
    console.log(this.state.pageContent);
  }

  handleDmClickAdmin = () => {
    this.setState({ pageContent: "adminDonations" });
    console.log(this.state.pageContent);
  };

  handleUmClickAdmin = () => {
    this.setState({ pageContent: "adminManageUsers" });
    console.log(this.state.pageContent);
  };

  handleEmClickAdmin = () => {
    this.setState({ pageContent: "adminEvents" });
    console.log(this.state.pageContent);
  };

  render() {
    {
      if (this.state.pageContent === "none") {
        return (
          <React.Fragment>
            <MenuAppBar />
            <div className="App" align="center">
              <header className="App-header" style={buttonMarginStyle}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    this.handleUserPortalClick();
                  }}
                >
                  I Am A User
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    this.handleAdminPortalClick();
                  }}
                >
                  I Am An Admin
                </Button>
                {/* <TemporaryDrawer /> */}
                {/* <UserTable users={this.state.users} />
              <hr />
              <DonationTable donations={this.state.donations} />
              <hr />
              <EventTable events={this.state.events} /> */}
              </header>
            </div>
          </React.Fragment>
        );
      } else if (this.state.pageContent === "adminManageUsers") {
        return (
          <React.Fragment>
            <MenuAppBar />
            <Button
              variant="contained"
              color="default"
              onClick={() => {
                this.handleUmClickAdmin();
              }}
            >
              User Management
            </Button>
            <Button
              variant="contained"
              color="default"
              onClick={() => {
                this.handleDmClickAdmin();
              }}
            >
              Donation Management
            </Button>
            <Button
              variant="contained"
              color="default"
              onClick={() => {
                this.handleEmClickAdmin();
              }}
            >
              Event Management
            </Button>
            {/* <TemporaryDrawer pageContent={this.state.pageContent} /> */}
            <UserTable users={this.state.users} />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                this.handleBackClick();
              }}
            >
              Back
            </Button>
          </React.Fragment>
        );
      } else if (this.state.pageContent === "userEvents") {
        return (
          <React.Fragment>
            <MenuAppBar />
            {/* <UserTemporaryDrawer /> */}
            <UserEventTable events={this.state.events} />
            <hr />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                this.handleBackClick();
              }}
            >
              Back
            </Button>
          </React.Fragment>
        );
      } else if (this.state.pageContent === "adminDonations") {
        return (
          <React.Fragment>
            <MenuAppBar />
            <Button
              variant="contained"
              color="default"
              onClick={() => {
                this.handleUmClickAdmin();
              }}
            >
              User Management
            </Button>
            <Button
              variant="contained"
              color="default"
              onClick={() => {
                this.handleDmClickAdmin();
              }}
            >
              Donation Management
            </Button>
            <Button
              variant="contained"
              color="default"
              onClick={() => {
                this.handleEmClickAdmin();
              }}
            >
              Event Management
            </Button>
            {/* <UserTemporaryDrawer /> */}
            <DonationTable donations={this.state.donations} />
            <hr />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                this.handleBackClick();
              }}
            >
              Back
            </Button>
          </React.Fragment>
        );
      } else if (this.state.pageContent === "adminEvents") {
        return (
          <React.Fragment>
            <MenuAppBar />
            <Button
              variant="contained"
              color="default"
              onClick={() => {
                this.handleUmClickAdmin();
              }}
            >
              User Management
            </Button>
            <Button
              variant="contained"
              color="default"
              onClick={() => {
                this.handleDmClickAdmin();
              }}
            >
              Donation Management
            </Button>
            <Button
              variant="contained"
              color="default"
              onClick={() => {
                this.handleEmClickAdmin();
              }}
            >
              Event Management
            </Button>
            {/* <UserTemporaryDrawer /> */}
            <EventTable events={this.state.events} />
            <hr />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                this.handleBackClick();
              }}
            >
              Back
            </Button>
          </React.Fragment>
        );
      }
    }
  }
}

export default App;
