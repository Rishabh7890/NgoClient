import React from "react";
import axios from "axios";
import { MDBCol, MDBBtn } from "mdbreact";

class AddDonation extends React.Component {
  state = {
    donation: {
      donationType: "",
      donationAmount: "",
      donationRefEmail: ""
    }
  };

  changeHandler = e => {
    const donation = { ...this.state.donation };
    donation[e.currentTarget.name] = e.currentTarget.value;
    this.setState({
      donation
    });
  };
  handleAdd = async () => {
    const obj = this.state.donation;
    const { data: donation } = await axios.post(
      "http://127.0.0.1:8080/donations",
      obj
    );
    window.open("http://127.0.0.1:3000/usereventpage", "_self");
  };

  handleSubmit = e => {
    e.preventDefault();
    this.handleAdd();
    console.log("class state");
    console.log(this.state.donation);
  };

  render() {
    return (
      <div align="center">
        <form onSubmit={this.handleSubmit}>
          <h1> Donate Now! </h1>
          <MDBCol align="center" md="4" className="mb-3">
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Event To Donate To{" "}
            </label>{" "}
            <input
              value={this.state.donation.donationType}
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
          </MDBCol>
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
            />
            <div className="valid-feedback"> Looks good! </div>{" "}
          </MDBCol>
          <MDBCol md="4" className="mb-3">
            <label
              htmlFor="defaultFormRegisterConfirmEx3"
              className="grey-text"
            >
              Donation Reference Twitter ID{" "}
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
              placeholder="Twitter ID Used For Donation"
            />
            <small id="donationRefEmail" className="form-text text-muted">
              We 'll never share your ID with anyone else.{" "}
            </small>{" "}
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
