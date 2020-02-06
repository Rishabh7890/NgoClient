import React from "react";
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

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const DonationTable = ({ donations }) => {
  const classes = useStyles();

  const handleDelete = e => {
    console.log(e);
    axios.delete(`http://localhost:8080/donations/delete/${e}`);
    // window.open("http://127.0.0.1:3000/admindonations", "_self");
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
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
          {donations.map(d => (
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
                    handleDelete(d.donationId);
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
};

export default DonationTable;
