import React, { Component } from "react";
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

class EventTable extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/events`).then(res => {
      const events = res.data;
      this.setState({ events });
    });
  }

  handleDelete = async ev => {
    console.log(ev);
    const originalEvs = this.state.events;
    const events = originalEvs.filter(e => e.eventName !== ev);
    this.setState({ events });

    try {
      await axios.delete(`http://localhost:8080/events/delete/${ev}`);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        console.log(ex);
        alert("Event Already Deleted");
        this.setState(originalEvs);
      }
    }
  };

  render() {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Event Title</TableCell>
              <TableCell align="right">Start Date</TableCell>
              <TableCell align="right">Duration</TableCell>
              <TableCell align="right">Place</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.events.map(e => (
              <TableRow key={e.eventName}>
                <TableCell component="th" scope="row">
                  {e.eventName}
                </TableCell>
                <TableCell align="right">{e.startDate}</TableCell>
                <TableCell align="right">{e.duration}</TableCell>
                <TableCell align="right">{e.place}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      this.handleDelete(e.eventName);
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

export default EventTable;
