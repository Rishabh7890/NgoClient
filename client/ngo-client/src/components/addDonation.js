import React from "react";
import axios from "axios";
import { MDBCol, MDBBtn } from "mdbreact";

class AddDonation extends React.Component {
  state = {
    donation: {
      donationType: "", // corresponds to eventName on UI but actual REST field is donationType
      donationAmount: "",
      donationRefEmail: ""
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
    const donation = { ...this.state.donation };
    donation[e.currentTarget.name] = e.currentTarget.value;
    this.setState({
      donation
    });
  };
  handleAdd = async () => {
    const obj = this.state.donation;
    console.log(obj);
    const { data: donation } = await axios.post(
      "http://127.0.0.1:8080/donations",
      obj
    );
    window.open("http://127.0.0.1:3000/thankyou", "_self");
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(window.location.pathname.slice(18));
    const eve = window.location.pathname.slice(18);
    let thisEvent = "";

    this.state.events.map(ev => {
      if (ev.id === eve) {
        thisEvent = ev.eventName;
      }
    });

    this.setState(prevState => ({
      donation: {
        // object that we want to update
        ...prevState.donation, // keep all other key-value pairs
        donationType: thisEvent // update the value of specific key
      }
    }));

    console.log(this.state.donation.donationType, "donationtype");

    this.handleAdd();
    // console.log("class state");
    console.log(this.state.donation);
  };

  render() {
    // console.log(window.location.pathname.slice(18));
    const eve = window.location.pathname.slice(18); // returns string of specific ID in URL
    let thisEvent = "";

    this.state.events.map(ev => {
      if (ev.id === eve) {
        thisEvent = ev.eventName;
      }
    });

    //this.setState({donation.donationType: thisEvent})

    console.log(`State: donationType = ${thisEvent}`);

    return (
      <div align="center">
        <form onSubmit={this.handleSubmit}>
          <h1> Donate to {thisEvent} Now! </h1>
          {/* <MDBCol align="center" md="4" className="mb-3">
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Event To Donate To{" "}
            </label>{" "}
            <input
              disabled
              value={thisEvent}
              className={
                this.state.donation.donationType.valid
                  ? "form-control is-valid"
                  : "form-control "
              }
              name="donationType"
              onChange={this.changeHandler}
              type="text"
              id="defaultFormRegisterNameEx"
              placeholder="Event To Donate To"
              required
            />
            <div className="valid-feedback"> Looks good! </div>{" "}
          </MDBCol> */}
          <MDBCol md="4" className="mb-3">
            <label htmlFor="defaultFormRegisterEmailEx2" className="grey-text">
              Donation Amount{" "}
            </label>{" "}
            <input
              value={this.state.donation.donationAmount}
              className={
                this.state.donation.donationAmount.valid
                  ? "form-control is-valid"
                  : "form-control"
              }
              name="donationAmount"
              onChange={this.changeHandler}
              type="text"
              id="defaultFormRegisterEmailEx2"
              placeholder="Donation Amount"
              required
              autoComplete="off"
            />
            <div className="valid-feedback"> Looks good! </div>{" "}
          </MDBCol>
          <MDBCol md="4" className="mb-3">
            <label
              htmlFor="defaultFormRegisterConfirmEx3"
              className="grey-text"
            >
              Please Enter Your Twitter ID As Signature You Approve Of This
              Donation{" "}
            </label>{" "}
            <input
              value={this.state.donation.donationRefEmail}
              className={
                this.state.donation.donationRefEmail.valid
                  ? "form-control is-valid"
                  : "form-control"
              }
              onChange={this.changeHandler}
              type="text"
              id="defaultFormRegisterConfirmEx3"
              name="donationRefEmail"
              placeholder="Signature"
              autoComplete="off"
              required
            />
          </MDBCol>
          <MDBBtn color="primary" type="submit">
            Submit{" "}
          </MDBBtn>{" "}
        </form>{" "}
      </div>
    );
  }
}

export default AddDonation;
