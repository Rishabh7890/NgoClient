import React from "react";
import axios from "axios";
import { Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const EventTable = ({ events }) => {
  const classes = useStyles();

  const handleDelete = e => {
    console.log(e);
    axios.delete(`http://localhost:8080/events/delete/${e}`);
    // window.open("http://127.0.0.1:3000/admindonations", "_self");
  };

  // const handleDelete = async event => {
  //   const events = props.events;
  //   const filteredEvents = events.filter(ev => ev.eventName !== ev.eventName);
  //   this.setState({ events });

  //   try {
  //     await axios.delete(`http://localhost:8080/events/delete/${e}`);
  //   } catch (ex) {
  //     if (ex.response && ex.response.status === 404) console.log("x");

  //     this.setState({ events: filteredEvents });
  //   }
  // };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Event Title</TableCell>
            <TableCell align="right">Start Date</TableCell>
            <TableCell align="right">Duration</TableCell>
            <TableCell align="right">Place</TableCell>
            {/* <TableCell align="right">Edit</TableCell> */}
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map(e => (
            <TableRow key={e.id}>
              <TableCell component="th" scope="row">
                {e.eventName}
              </TableCell>
              <TableCell align="right">{e.startDate}</TableCell>
              <TableCell align="right">{e.duration}</TableCell>
              <TableCell align="right">{e.place}</TableCell>
              {/* <TableCell align="right">Edit</TableCell> */}
              <TableCell align="right">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    handleDelete(e.eventName);
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

export default EventTable;
