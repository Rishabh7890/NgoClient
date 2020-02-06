import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchDonations } from '../../redux'
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

const DonationContainer = ({ donation , fetchDonations }) => {
    useEffect(() => {
        fetchDonations()
    }, [])

    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Donation Type</TableCell>
                        <TableCell align="right">Donation Amount</TableCell>
                        <TableCell align="right">Donation Reference Email</TableCell>
                        <TableCell align="right">Delete Donation</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {donation.donation.map(d => (
                        <TableRow key={d.donationRefEmail}>
                            <TableCell component="th" scope="row">{d.donationType}</TableCell>
                            <TableCell align="right">{d.donationAmount}</TableCell>
                            <TableCell align="right">{d.donationRefEmail}</TableCell>
                            <TableCell align="right">{/* <i className="fa fa-pencil" aria-hidden="true"></i> */}Delete</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

const mapStateToProps = state => {
    return {
        donation: state.donation,    
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDonations: () => dispatch(fetchDonations())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DonationContainer)