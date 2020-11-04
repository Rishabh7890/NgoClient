import React, { useEffect, useState, Component } from "react";
//import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn
} from "mdbreact";
import { connect } from "react-redux";
import { fetchAdmins } from "../redux";

const MostafaLogin = ({ admin, fetchAdmins }) => {
  useEffect(() => {
    fetchAdmins();
  }, []);

  const [statee, setStatee] = useState({ userr: "", pass: "" });

  const handleLog = (admin, e) => {
    const oAdmin = admin.map(a => a.admin.adminEmail);
    console.log(oAdmin, "admins");
    const oPass = admin.map(a => a.admin.adminPassword);
    console.log(oPass, "paswords");
    console.log(statee.userr, "user1");
    console.log(statee.pass, "password1");

    if (oAdmin === statee.userr && oPass === statee.pass) {
      window.open("http://127.0.0.1:3000/adminchoicepage");
    } else {
      alert("wring email or password ,Try Again!");
      e.preventDefault();
    }
  };

  const onchange = e => {
    setStatee({ [e.target.name]: e.target.value });
  };

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign in</strong>
                </h3>
              </div>

              <MDBInput
                value={statee.userr}
                label="Your email"
                name="userr"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                //onchange={event => this.setState({userr: event.target.value})}
                onChange={onchange}
              />
              <MDBInput
                value={statee.pass}
                label="Your password"
                group
                type="password"
                validate
                containerClass="mb-0"
                //onchange={event =>this.setState({pass:event.target.value})}
                name="pass"
                onChange={onchange}
              />

              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                  onClick={handleLog}
                ></MDBBtn>
              </div>
              <div className="row my-3 d-flex justify-content-center"></div>
            </MDBCardBody>
          </MDBCard>
          {/* <h1>user:{this.state.userr}</h1> */}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
const mapStateToProps = state => {
  return {
    admin: state.admin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAdmins: () => dispatch(fetchAdmins())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MostafaLogin);
