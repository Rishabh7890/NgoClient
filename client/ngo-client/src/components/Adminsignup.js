import React from "react";
import {
    MDBCol,
    MDBBtn
} from "mdbreact";

class Adminsignup extends React.Component {
    state = {
        fname: {
            value: "",
            valid: false
        },
        lname: {
            value: "",
            valid: false
        },
        email: {
            value: "",
            valid: false
        },
        password: {
            value: "",
            valid: false
        }
    };

    changeHandler = event => {
        this.setState({
            [event.target.name]: {
                value: event.target.value,
                valid: !!event.target.value
            }
        });
    };

    render() {
        return ( <
            div >
            <
            h1 > sign up here < /h1> <
            form >
            <
            MDBCol md = "4"
            className = "mb-3" >
            <
            label htmlFor = "defaultFormRegisterNameEx"
            className = "grey-text" >
            First name <
            /label> <
            input value = {
                this.state.fname.value
            }
            className = {
                this.state.fname.valid ?
                "form-control is-valid" :
                    "form-control is-invalid"
            }
            name = "fname"
            onChange = {
                this.changeHandler
            }
            type = "text"
            id = "defaultFormRegisterNameEx"
            placeholder = "First name"
            required /
            >
            <
            div className = "valid-feedback" > Looks good! < /div> <
            /MDBCol>

            <
            MDBCol md = "4"
            className = "mb-3" >
            <
            label htmlFor = "defaultFormRegisterEmailEx2"
            className = "grey-text" >
            Last name <
            /label> <
            input value = {
                this.state.lname.value
            }
            className = {
                this.state.lname.valid ?
                "form-control is-valid" :
                    "form-control is-invalid"
            }
            name = "lname"
            onChange = {
                this.changeHandler
            }
            type = "text"
            id = "defaultFormRegisterEmailEx2"
            placeholder = "Last name"
            required /
            >
            <
            div className = "valid-feedback" > Looks good! < /div> <
            /MDBCol>

            <
            MDBCol md = "4"
            className = "mb-3" >
            <
            label htmlFor = "defaultFormRegisterConfirmEx3"
            className = "grey-text" >
            Email <
            /label> <
            input value = {
                this.state.email.value
            }
            className = {
                this.state.email.valid ?
                "form-control is-valid" :
                    "form-control is-invalid"
            }
            onChange = {
                this.changeHandler
            }
            type = "email"
            id = "defaultFormRegisterConfirmEx3"
            name = "email"
            placeholder = "Your Email address"
            required /
            >
            <
            small id = "emailHelp"
            className = "form-text text-muted" >
            We 'll never share your email with anyone else. <
            /small> <
            /MDBCol>

            <
            MDBCol md = "4"
            className = "mb-3" >
            <
            label htmlFor = "defaultFormRegisterPasswordEx4"
            className = "grey-text" >
            Password <
            /label> <
            input value = {
                this.state.password.value
            }
            className = {
                this.state.password.valid ?
                "form-control is-valid" :
                    "form-control is-invalid"
            }
            onChange = {
                this.changeHandler
            }
            type = "password"
            id = "defaultFormRegisterPasswordEx4"
            name = "password"
            placeholder = "password"
            required /
            >
            <
            div className = "invalid-feedback" >
            Please provide a Valid password <
            /div> <
            div className = "valid-feedback" > Looks good! < /div> <
            /MDBCol>

            <
            MDBCol md = "4"
            className = "mb-3" >
            <
            div className = "custom-control custom-checkbox pl-3" >
            <
            input className = "custom-control-input"
            type = "checkbox"
            value = ""
            id = "invalidCheck"
            required /
            >
            <
            label className = "custom-control-label"
            htmlFor = "invalidCheck" >
            Agree to terms and conditions <
            /label> <
            div className = "invalid-feedback" >
            You must agree before submitting. <
            /div> <
            /div> <
            /MDBCol> <
            MDBBtn color = "primary"
            type = "submit" >
            Submit <
            /MDBBtn> <
            /form> <
            /div>
        );
    }
}

export default Adminsignup;