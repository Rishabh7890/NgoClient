import React, { Component } from "react";
import MenuAppBar from "../components/navbar";
import Header from "../components/header";

const buttonMarginStyle = {
  marginTop: "25px"
};

class UserHomePage extends Component {
  state = {
    user: {},
    error: null,
    authenticated: false
  };

  componentDidMount() {
    // Fetch does not send cookies. So you should add credentials: 'include'
    fetch("http://127.0.0.1:4000/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
      .then(response => {
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then(responseJson => {
        this.setState({
          authenticated: true,
          user: responseJson.user
        });
      })
      .catch(error => {
        this.setState({
          authenticated: false,
          error: "Failed to authenticate user"
        });
      });
  }
  render() {
    const { authenticated } = this.state;
    return (
      <React.Fragment>
        <MenuAppBar />
        <div>
          <Header
            authenticated={authenticated}
            handleNotAuthenticated={this._handleNotAuthenticated}
          />
          <div>
            <hr />
            {!authenticated ? (
              <h1>
                Welcome! Please Log In Via Twitter To Access Current Events To
                Donate To!
              </h1>
            ) : (
              <div>
                <h1>You have logged in successfully!</h1>
                <h2>Welcome {this.state.user.name}!</h2>
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
  _handleNotAuthenticated = () => {
    this.setState({ authenticated: false });
  };
}

export default UserHomePage;
