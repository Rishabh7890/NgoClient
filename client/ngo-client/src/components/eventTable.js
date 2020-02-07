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

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

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
              {/* <TableCell align="right">Edit</TableCell> */}
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
                {/* <TableCell align="right">Edit</TableCell> */}
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

// import React, { Component } from "react";
// import axios from "axios";

// import { makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import { Button } from "@material-ui/core";

// // const useStyles = makeStyles({
// //   table: {
// //     minWidth: 650
// //   }
// // });

// class DonationTable extends Component {
//   state = {
//     donations: []
//   };

//   componentDidMount() {
//     axios.get(`http://localhost:8080/donations`).then(res => {
//       const donations = res.data;
//       this.setState({ donations });
//     });
//   }

//   handleDelete = async don => {
//     console.log(don);
//     const originalDons = this.state.donations;
//     const donations = originalDons.filter(d => d.donationId !== don);
//     this.setState({ donations });

//     try {
//       await axios.delete(`http://localhost:8080/donations/delete/${don}`);
//     } catch (ex) {
//       if (ex.response && ex.response.status === 404) {
//         console.log(ex);
//         alert("Movie Already Deleted");
//         this.setState(originalDons);
//       }
//     }
//   };

//   render() {
//     return (
//       <TableContainer component={Paper}>
//         <Table aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Event Name</TableCell>
//               <TableCell align="right">Donation Amount</TableCell>
//               <TableCell align="right">
//                 Donation Reference Twitter ScreenName
//               </TableCell>
//               <TableCell align="right">Delete Donation</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {this.state.donations.map(d => (
//               <TableRow key={d.donationId}>
//                 <TableCell component="th" scope="row">
//                   {d.donationType}
//                 </TableCell>
//                 <TableCell align="right">{d.donationAmount}</TableCell>
//                 <TableCell align="right">{d.donationRefEmail}</TableCell>
//                 <TableCell align="right">
//                   <Button
//                     variant="contained"
//                     color="secondary"
//                     onClick={() => {
//                       this.handleDelete(d.donationId);
//                     }}
//                   >
//                     Delete
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     );
//   }
// }

// export default DonationTable;
