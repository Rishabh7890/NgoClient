import React, { Component } from "react";
import UserTable from "./components/userTable";
import axios from "axios";
import DonationTable from "./components/donationTable";
import EventTable from "./components/eventTable";
import MenuAppBar from "./components/navbar"
// import "./App.css";
import TemporaryDrawer from "./components/sidebar";
import Loggin from './components/loginForm'
import Adduser from "./components/Adduser";

let one = `http://localhost:8080/users`;
let two = `http://localhost:8080/donations`;
let three = `http://localhost:8080/events`;

const requestOne = axios.get(one);
const requestTwo = axios.get(two);
const requestThree = axios.get(three);

class App extends Component {
  state = {
    users: [],
    donations: [],
    events: []
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

  render() {
    return (
      <React.Fragment>
        <MenuAppBar users={this.state.users}/>
        <Adduser />

        {/* <div className="App">
          <header className="App-header">
            <TemporaryDrawer />
            {/* <UserTable users={this.state.users} />
            <hr />
            <DonationTable donations={this.state.donations} />
            <hr />
            <EventTable events={this.state.events} /> 
          </header>
        </div> */}
      </React.Fragment>
    );
  }
}

export default App;
