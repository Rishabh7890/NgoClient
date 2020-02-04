import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/home";
import UserHomePage from "./pages/userHomePage";
import AdminHomePage from "./pages/adminHomePage";
import AdminUsers from "./pages/adminUsers";
import AdminDonations from "./pages/adminDonations";
import AdminEvents from "./pages/adminEvents";

function App() {
  return (
    <div className="App container">
      <div className="jumbotron">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/userhomepage" component={UserHomePage} />
            <Route path="/adminhomepage" component={AdminHomePage} />
            <Route path="/adminusers" component={AdminUsers} />
            <Route path="/admindonations" component={AdminDonations} />
            <Route path="/adminevents" component={AdminEvents} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
