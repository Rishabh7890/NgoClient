import React from "react";
import axios from "axios";
import { MDBCol, MDBBtn } from "mdbreact";
class EditEventForm extends React.Component {
  state = {
    event: {
      eventName: "",
      startDate: "",
      duration: "",
      place: ""
    },
    events: []
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/events`).then(res => {
      const events = res.data;
      this.setState({ events });
      console.log(this.state.events);
    });
  }

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
    console.log(window.location.pathname.slice(11));
    const eve = window.location.pathname.slice(11); // returns string of specific ID in URL
    let thisEvent = "";
    let thisEventDate = "";
    let thisEventDuration = "";
    let thisEventPlace = "";

    this.state.events.map(ev => {
      if (ev.id === eve) {
        thisEvent = ev.eventName;
      }
    });

    this.state.events.map(ev => {
      if (ev.id === eve) {
        thisEventDate = ev.startDate;
      }
    });

    this.state.events.map(ev => {
      if (ev.id === eve) {
        thisEventDuration = ev.duration;
      }
    });

    this.state.events.map(ev => {
      if (ev.id === eve) {
        thisEventPlace = ev.place;
      }
    });
    console.log(thisEvent);
    console.log(thisEventDate);
    console.log(thisEventDuration);
    console.log(thisEventPlace);

    // this.state.event.eventName = thisEvent;
    // this.state.event.startDate = thisEventDate;
    // this.state.event.duration = thisEventDuration;
    // this.state.event.place = thisEventPlace;

    return (
      <div align="center">
        <form onSubmit={this.handleSubmit}>
          <h1> Edit Event: {thisEvent} </h1>
          <MDBCol align="center" md="4" className="mb-3">
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Event name{" "}
            </label>{" "}
            <input
              defaultValue={thisEvent}
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
              autoComplete="off"
            />
            <div className="valid-feedback"> Looks good! </div>{" "}
          </MDBCol>
          <MDBCol md="4" className="mb-3">
            <label htmlFor="defaultFormRegisterEmailEx2" className="grey-text">
              Start Date{" "}
            </label>{" "}
            <input
              defaultValue={thisEventDate}
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
              defaultValue={thisEventDuration}
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
              autoComplete="off"
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
              defaultValue={thisEventPlace}
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
              autoComplete="off"
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

export default EditEventForm;
