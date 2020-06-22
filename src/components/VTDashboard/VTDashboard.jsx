import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";

class VTDashboard extends Component {
  componentDidMount = () => {
    // get dashboard info for Vet Tech, get request
  };

  detailsButton = (event) => {
    this.props.dispatch({
      type: "GET_VT_SERVICE_REQUEST_BY_ID",
      payload: event.currentTarget.value,
    });
    this.props.history.push("/vtservicerequest");
  };
  render() {
    return (
        <div>
      <Container>
        <h1>Photo will go here</h1>
        <h1>Photo will go here</h1>
        <h2>Pending Requests</h2>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Client Name</TableCell>
                <TableCell>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Client Name</TableCell>
                <TableCell>
                <Button
                  size="small"
                  variant="contained"
                  // will need to add a value, (id) for event to capture.
                  onClick={this.detailsButton}
                >
                  Details
                </Button>
              </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Client Name</TableCell>
                <TableCell>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Client Name</TableCell>
                <TableCell>
                <Button
                  size="small"
                  variant="contained"
                  // will need to add a value, (id) for event to capture.
                  onClick={this.detailsButton}
                >
                  Details
                </Button>
              </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
       <Container>
       <h1>Photo will go here</h1>
      
       <h2>Upcoming Commitments</h2>
       <TableContainer component={Paper}>
         <Table>
           <TableHead>
             <TableRow>
               <TableCell>Name</TableCell>
               <TableCell>Date</TableCell>
               <TableCell>Client Name</TableCell>
               <TableCell>Details</TableCell>
             </TableRow>
           </TableHead>
           <TableBody>
             <TableRow>
               <TableCell>Name</TableCell>
               <TableCell>Date</TableCell>
               <TableCell>Client Name</TableCell>
               <TableCell>
               <Button
                 size="small"
                 variant="contained"
                 // will need to add a value, (id) for event to capture.
                 onClick={this.detailsButton}
               >
                 Details
               </Button>
             </TableCell>
             </TableRow>
           </TableBody>
         </Table>
       </TableContainer>
       <TableContainer component={Paper}>
         <Table>
           <TableHead>
             <TableRow>
               <TableCell>Name</TableCell>
               <TableCell>Date</TableCell>
               <TableCell>Client Name</TableCell>
               <TableCell>Details</TableCell>
             </TableRow>
           </TableHead>
           <TableBody>
             <TableRow>
               <TableCell>Name</TableCell>
               <TableCell>Date</TableCell>
               <TableCell>Client Name</TableCell>
               <TableCell>
               <Button
                 size="small"
                 variant="contained"
                 // will need to add a value, (id) for event to capture.
                 onClick={this.detailsButton}
               >
                 Details
               </Button>
             </TableCell>
             </TableRow>
           </TableBody>
         </Table>
       </TableContainer>
     </Container>
     </div>
    );
  }
}
export default VTDashboard;
