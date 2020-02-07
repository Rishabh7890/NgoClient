import React, { Component } from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650
//   }
// });

class DonationTable extends Component {
  state = {
    donations: []
  };
  // classes = useStyles();

  componentDidMount() {
    axios.get(`http://localhost:8080/donations`).then(res => {
      const donations = res.data;
      this.setState({ donations });
    });
  }

  handleDelete = e => {
    console.log(e);
    axios.delete(`http://localhost:8080/donations/delete/${e}`);
    // window.open("http://127.0.0.1:3000/admindonations", "_self");
  };

  // handleDelete = async don => {
  //   const originalDons = this.state.donations;
  //   const donations = originalDons.filter(d => d.donationId !== don.donationId);
  //   this.setState({ donations });

  //   try {
  //     await deleteDonation(don.donationId);
  //   } catch (ex) {
  //     if (ex.response && ex.response.status === 404) {
  //       console.log(ex);
  //       alert("Movie Already Deleted");
  //       this.setState(originalDons);
  //     }
  //   }
  // };

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
                    Delete
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
