import React from "react";
import axios from "axios";
import { MDBCol, MDBBtn } from "mdbreact";
class Addevent extends React.Component {
  state = {
    event: {
      eventName: "",
      startDate: "",
      duration: "",
      place: ""
    }
  };

  changeHandler = e => {
    const event = { ...this.state.event };
    event[e.currentTarget.name] = e.currentTarget.value;
    this.setState({
      event
    });
  };
  handleAdd = async () => {
    const obj = this.state.event;
    const { data: event } = await axios.post(
      "http://127.0.0.1:8080/events",
      obj
    );
    window.open("http://127.0.0.1:3000/adminevents", "_self");
    // const events = [event, ...this.state.event];
    // this.setState({ events });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.handleAdd();
    console.log("class state");
    console.log(this.state.event);
  };

  render() {
    return (
      <div align="center">
        <form onSubmit={this.handleSubmit}>
          <h1> Add a new Event </h1>
          <MDBCol align="center" md="4" className="mb-3">
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Event name{" "}
            </label>{" "}
            <input
              value={this.state.event.eventName}
              className={
                this.state.event.eventName.valid
                  ? "form-control is-valid"
                  : "form-control "
              }
              name="eventName"
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
              value={this.state.event.startDate}
              className={
                this.state.event.startDate.valid
                  ? "form-control is-valid"
                  : "form-control"
              }
              name="startDate"
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
              value={this.state.event.duration}
              className={
                this.state.event.duration.valid
                  ? "form-control is-valid"
                  : "form-control"
              }
              onChange={this.changeHandler}
              type="text"
              id="defaultFormRegisterConfirmEx3"
              name="duration"
              placeholder="Event Duration"
            />
          </MDBCol>
          <MDBCol md="4" className="mb-3">
            <label
              htmlFor="defaultFormRegisterPasswordEx4"
              className="grey-text"
            >
              Place{" "}
            </label>{" "}
            <input
              value={this.state.event.place}
              className={
                this.state.event.place.valid
                  ? "form-control is-valid"
                  : "form-control"
              }
              onChange={this.changeHandler}
              type="location"
              id="defaultFormRegisterPasswordEx4"
              className="form-control"
              name="place"
              placeholder="location"
              required
            />
            <div className="invalid-feedback">
              Please provide a Valid password{" "}
            </div>{" "}
            <div className="valid-feedback"> Looks good! </div>{" "}
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
