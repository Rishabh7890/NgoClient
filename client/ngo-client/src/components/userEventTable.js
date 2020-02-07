import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const UserEventTable = ({ events }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Event Title</TableCell>
              <TableCell align="right">Start Date</TableCell>
              <TableCell align="right">Duration</TableCell>
              <TableCell align="right">Place</TableCell>
              <TableCell align="right">Donate</TableCell>
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
                <TableCell align="right">
                  <Link to="/usermakedonation">Donate</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default UserEventTable;
