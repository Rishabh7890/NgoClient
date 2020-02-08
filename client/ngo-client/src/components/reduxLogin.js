import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBModalFooter
} from "mdbreact";
import { connect } from "react-redux";
import { fetchAdmins } from "../redux";

const ReduxLogin = ({ admin, fetchAdmins }) => {
  useEffect(() => {
    fetchAdmins();
  }, []);

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleChange = e => {
    console.log(e);
    const event = { ...user };
    event[e.currentTarget.name] = e.currentTarget.value;
    setUser({ user });
    console.log(user);
  };
  const handler = e => {
    const even = { ...pass };
    even[e.currentTarget.name] = e.currentTarget.value;
    setPass(even);
    console.log(pass);
  };

  const handleLog = () => {
    console.log(admin, "check admin or admin.admin");
    const oAdmin = admin.admin.map(a => a.adminEmail);
    console.log(oAdmin, "admins");
    const oPass = admin.admin.map(a => a.adminPassword);
    console.log(oPass, "paswords");
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
                // value={this.state.emailid}
                name="user"
                label="Your email"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                onchange={handleChange}
              />
              <MDBInput
                value={pass}
                name="pass"
                label="Your password"
                group
                type="password"
                validate
                containerClass="mb-0"
                onchange={handler}
              />

              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                  onClick={handleLog}
                >
                  {/* <Link to="/adminchoicepage" color="inherit">
                    Sign In
                  </Link> */}
                </MDBBtn>
              </div>
              <div className="row my-3 d-flex justify-content-center"></div>
            </MDBCardBody>
          </MDBCard>
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
)(ReduxLogin);
