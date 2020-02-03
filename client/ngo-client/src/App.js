import React, { Component } from "react";
import SimpleTable from "./components/userTable";
import axios from "axios";
// import "./App.css";

const apiEndPoint = `http://localhost:8080/users`;

class App extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios.get(`${apiEndPoint}`).then(res => {
      const users = res.data;
      console.log(users);
      this.setState({ users });
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <SimpleTable users={this.state.users} />
          </header>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
