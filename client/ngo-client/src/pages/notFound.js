import React , { Component } from 'react'
import MenuAppBar from "../components/navBar";
class NotFound extends Component {
    render() {
        return (
            <React.Fragment>
                <MenuAppBar />
                <div className="App" align="center">
                    <h1>404 Error</h1>
                    <h4>page not found </h4>
                    <h2>press Back!</h2>
                </div>
            </React.Fragment>
        );
    }
}

export default NotFound;