import React from "react";
import { MDBCol, MDBBtn } from "mdbreact";

class Addevent extends React.Component {
  state = {
    ename: {
      value: "",
      valid: false
    },
    esdate: {
      value: "",
      valid: false
    },
    eduration: {
      value: "",
      valid: false
    },
    eplace: {
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
 handleMenu = event => {
  console.log(this.state.eduration.value);
  console.log(this.state.epalce.value);
  console.log(this.state.esdate.value);
};
  render() {
    return (
      <div align="center">
        <form>
          <h1> Add a new Event </h1>
          <MDBCol align="center" md="4" className="mb-3">
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Event name{" "}
            </label>{" "}
            <input
              value={this.state.ename.value}
              className={
                this.state.ename.valid
                  ? "form-control is-valid"
                  : "form-control is-invalid"
              }
              name="ename"
              onChange={this.changeHandler}
              type="text"
              id="defaultFormRegisterNameEx"
              placeholder="Event name"
              required
            />
            <div className="valid-feedback"> Looks good! </div>{" "}
          </MDBCol>
          <MDBCol md="4" className="mb-3">
            <label htmlFor="defaultFormRegisterEmailEx2" className="grey-text">
              Start Date{" "}
            </label>{" "}
            <input
              value={this.state.esdate.value}
              className={
                this.state.esdate.valid
                  ? "form-control is-valid"
                  : "form-control is-invalid"
              }
              name="esdate"
              onChange={this.changeHandler}
              type="date"
              id="defaultFormRegisterEmailEx2"
              placeholder=" start date"
              required
            />
            <div className="valid-feedback"> Looks good! </div>{" "}
          </MDBCol>
          <MDBCol md="4" className="mb-3">
            <label
              htmlFor="defaultFormRegisterConfirmEx3"
              className="grey-text"
            >
              Duration{" "}
            </label>{" "}
            <input
              value={this.state.eduration.value}
              className={
                this.state.eduration.valid
                  ? "form-control is-valid"
                  : "form-control is-invalid"
              }
              onChange={this.changeHandler}
              type="time"
              id="defaultFormRegisterConfirmEx3"
              name="eduration"
              placeholder="Event Duration"
            />
            <small id="eduration" className="form-text text-muted">
              We 'll never share your email with anyone else.{" "}
            </small>{" "}
          </MDBCol>
          <MDBCol md="4" className="mb-3">
            <label
              htmlFor="defaultFormRegisterPasswordEx4"
              className="grey-text"
            >
              Place{" "}
            </label>{" "}
            <input
              value={this.state.eplace.value}
              className={
                this.state.eplace.valid
                  ? "form-control is-valid"
                  : "form-control is-invalid"
              }
              onChange={this.changeHandler}
              type="location"
              id="defaultFormRegisterPasswordEx4"
              className="form-control"
              name="eplace"
              placeholder="location"
              required
            />
            <div className="invalid-feedback">
              Please provide a Valid password{" "}
            </div>{" "}
            <div className="valid-feedback"> Looks good! </div>{" "}
          </MDBCol>{" "}
          <MDBCol md="4" className="mb-3">
            <div className="custom-control custom-checkbox pl-3">
              <input
                className="custom-control-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <div className="invalid-feedback">
                You must agree before submitting.{" "}
              </div>{" "}
            </div>{" "}
          </MDBCol>{" "}
          <MDBBtn color="primary" type="submit">
            Submit{" "}
          </MDBBtn>{" "}
        </form>{" "}
      </div>
    );
  }
}

export default Addevent;
