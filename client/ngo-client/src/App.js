import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import io from "socket.io-client";
import FontAwesome from "react-fontawesome";

import HomePage from "./pages/home";
import UserHomePage from "./pages/userHomePage";
import UserEventPage from "./pages/userEventPage";
import AdminHomePage from "./pages/adminHomePage";
import AdminUsers from "./pages/adminUsers";
import AdminDonations from "./pages/adminDonations";
import AdminEvents from "./pages/adminEvents";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      disabled: ""
    };
    this.popup = null;
  }
  render() {
    return (
      <div className="App container">
        <div className="jumbotron">
          <Router>
            <Switch>
              <Route path="/userhomepage" component={UserHomePage} />
              <Route path="/usereventpage" component={UserEventPage} />
              <Route path="/adminhomepage" component={AdminHomePage} />
              <Route path="/adminusers" component={AdminUsers} />
              <Route path="/admindonations" component={AdminDonations} />
              <Route path="/adminevents" component={AdminEvents} />
              <Route exact path="/" component={HomePage} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
