import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import HomePage from "./pages/home";
import UserHomePage from "./pages/userHomePage";
import UserEventPage from "./pages/userEventPage";
import AdminHomePage from "./pages/adminHomePage";
import AdminUsers from "./pages/adminUsers";
import AdminDonations from "./pages/adminDonations";
import AdminEvents from "./pages/adminEvents";
import AdminChoicePage from "./pages/adminChoicePage";
import AdminAddEvent from "./pages/adminAddEvent";
import UserMakeDonation from "./pages/userMakeDonation";
import EditEvent from "./pages/editEvent";
import NotFound from "./pages/notFound";
import ThankYou from "./pages/thankYou";

class App extends Component {
  render() {
    return (
      // <div className="App_container">
      <div className="container main_app">
        <Router>
          <Switch>
            <Route path="/usermakedonation/:id" component={UserMakeDonation} />
            <Route path="/editevent/:id" component={EditEvent} />
            <Route path="/userhomepage" component={UserHomePage} />
            <Route path="/thankyou" component={ThankYou} />
            <Route path="/usereventpage" component={UserEventPage} />
            <Route path="/adminchoicepage" component={AdminChoicePage} />
            <Route path="/adminhomepage" component={AdminHomePage} />
            <Route path="/adminusers" component={AdminUsers} />
            <Route path="/admindonations" component={AdminDonations} />
            <Route path="/adminevents" component={AdminEvents} />
            <Route path="/adminaddevent" component={AdminAddEvent} />
            <Route path="/not-found" component={NotFound}></Route>
            <Route exact path="/" component={HomePage} />
            <Redirect to="/not-found"></Redirect>
          </Switch>
        </Router>
      </div>
      // </div>
    );
  }
}

export default App;
