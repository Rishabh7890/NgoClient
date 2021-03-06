import React, { Component } from "react";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

class DonationTable extends Component {
  state = {
    donations: []
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/donations`).then(res => {
      const donations = res.data;
      this.setState({ donations });
    });
  }

  handleDelete = async don => {
    console.log(don);
    const originalDons = this.state.donations;
    const donations = originalDons.filter(d => d.donationId !== don);
    this.setState({ donations });

    try {
      await axios.delete(`http://localhost:8080/donations/delete/${don}`);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        console.log(ex);
        alert("Movie Already Deleted");
        this.setState(originalDons);
      }
    }
  };

  render() {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Event Name</TableCell>
              <TableCell align="right">Donation Amount</TableCell>
              <TableCell align="right">
                Donation Reference Twitter ScreenName
              </TableCell>
              <TableCell align="right">Delete Donation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.donations.map(d => (
              <TableRow key={d.donationId}>
                <TableCell component="th" scope="row">
                  {d.donationType}
                </TableCell>
                <TableCell align="right">{d.donationAmount}</TableCell>
                <TableCell align="right">{d.donationRefEmail}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      this.handleDelete(d.donationId);
                    }}
                  >
                    <HighlightOffIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default DonationTable;
