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
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

class UserTable extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/users`).then(res => {
      const users = res.data;
      this.setState({ users });
    });
  }

  handleDelete = async u => {
    console.log(u);
    const originalUsers = this.state.users;
    const users = originalUsers.filter(us => us.screenName !== u);
    this.setState({ users });

    try {
      await axios.delete(`http://localhost:8080/donations/delete/${u}`);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        console.log(ex);
        alert("User Already Deleted");
        this.setState(originalUsers);
      }
    }
  };

  render() {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Twitter Username</TableCell>
              <TableCell align="right">Twitter ID</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.users.map(u => (
              <TableRow key={u.twitterId}>
                <TableCell align="right">{u.name}</TableCell>
                <TableCell align="right">{u.screenName}</TableCell>
                <TableCell align="right">{u.twitterId}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      this.handleDelete(u.screenName);
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

export default UserTable;
