import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../redux'
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

function UsersContainer ({ users, fetchUsers }) {
    useEffect(() => {
        fetchUsers()
    }, [])
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell align="right">Last Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Edit User</TableCell>
                        <TableCell align="right">Delete User</TableCell>
                    </TableRow>
                </TableHead>
            <TableBody>
            {users.users.map(u => (
                <TableRow key={u.userEmail}>
                    <TableCell component="th" scope="row">{u.userFname}</TableCell>
                    <TableCell align="right">{u.userLname}</TableCell>
                    <TableCell align="right">{u.userEmail}</TableCell>
                    <TableCell align="right"><i className="fa fa-pencil" aria-hidden="true"></i>Edit</TableCell>
                    <TableCell align="right"><i className="fa fa-trash" aria-hidden="true"></i>Delete</TableCell>
                </TableRow>
            ))}
            </TableBody>
            </Table>
        </TableContainer>

    )
}

const mapStateToProps = state => {
    return {
        
        users: state.user,
        event:state.event,
        
    }
    
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersContainer)