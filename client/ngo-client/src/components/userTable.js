import React, { useEffect } from "react";
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

const UserTable = ({ users }) => {
  const classes = useStyles();

  const handleDelete = async post => {
    // const originalPosts = this.state.posts;
    // const posts = this.state.posts.filter(p => p.id !== post.id);
    // this.setState({ posts });
    // console.log("Delete", post);
    try {
      await axios.delete(
        `http://localhost:8080/users/delete/${users.screenName}`
      );
    } catch (ex) {
      alert("Error deleting post");
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Twitter Username</TableCell>
            <TableCell align="right">Twitter ID</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(u => (
            <TableRow key={u.twitterId}>
              <TableCell align="right">{u.name}</TableCell>
              <TableCell align="right">{u.screenName}</TableCell>
              <TableCell align="right">{u.twitterId}</TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleDelete}
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

export default UserTable;
