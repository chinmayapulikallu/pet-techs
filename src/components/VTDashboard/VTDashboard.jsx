import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Typography from "@material-ui/core/Typography";
const moment = require('moment');

const styles = theme => ({
  img: {
    borderRadius: '50%',
    // position: 'absolute',
    top: 170,
    left: 100,
  },
})

class VTDashboard extends Component {
  componentDidMount = () => {
    // get dashboard info for Vet Tech, get request
    // const currentId = this.props.match.params.id
     console.log('component mounted Vt dashboard:::::', this.props.clientRequest)
    this.props.dispatch({
      type: "GET_VT_DATA",
      // payload: currentId,
    })
    this.props.dispatch({
      type: 'GET_VT_SERVICE_REQUEST'
      // payload: { id: currentId }
    })
   
  };
  // not sure if these will be the exact paths, or types, placeholders for now.
  detailsButton = (requestID) => {
    // this.props.dispatch({
    //   type: "GET_VT_SERVICE_REQUEST_BY_ID",
    //   payload: event.currentTarget.value,
    // });
    this.props.history.push(`/vt-service/${requestID}`);
  };
  // not sure if these will be the exact paths, or types, placeholders for now.
  viewButton = (petID) => {
    // this.props.dispatch({
    //   type: "GET_CARE_PLAN__BY_ID",
    //   payload: event.currentTarget.value,
    // });
    this.props.history.push(`/careplan/${petID}`);
    this.props.dispatch({
      type: 'GET_PET_CARE_PLAN',
      payload: { id: petID }
    })
  };
  render() {
    const { classes, clientRequest, petInfo } = this.props;

    return (
      <div>
        {this.props.vtInfo.map((vt) => {
          return (
            <div key={vt.id}>

              <Container>

                {vt.profile_img === '3e541de1f0419c15034e45c05eb3becd' ?
                  <>
                    <img className={classes.img}
                      src="images/blank-profile-picture.png" alt="profile" height='200' width='200'/>
                  </>
                  :
                  <img className={classes.img}
                    src={vt.media_url} alt={vt.profile_img} height='200' width='200'/>
                }

                {/* <img className={classes.img} src={vt.media_url} alt={vt.profile_img} height="150" width="150" /> */}
                <Typography variant="h6">Pending Requests ({clientRequest.filter(cr => cr.request_status === 0).length})</Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Client Name</TableCell>
                         <TableCell>Service Type</TableCell>
                        <TableCell>Details</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {clientRequest.map(request => 
                      <TableRow key={request.id}>
                         {request.request_status === 0 &&
                         <>
                        <TableCell>{request.pet_name}</TableCell>
                        <TableCell>{moment(request.start_date_time).format("MMM Do YYYY")}</TableCell>
                        <TableCell>{request.client_name}</TableCell>
                         <TableCell>{request.service_select}</TableCell>
                        <TableCell>
                          <Button
                            size="small"
                            variant="contained"
                            // will need to add a value, (id) for event to capture.
                              onClick={() => this.detailsButton(request.id)}
                          >
                            Details
                         </Button>
                        </TableCell>
                        </>
                         }
                      </TableRow>
                        
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Container>
              <Container>
                <Typography variant="h6">Upcoming Commitments ({clientRequest.filter(cr => cr.request_status === 1).length})</Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Pet Name</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Species Name</TableCell>
                        <TableCell>Service Type</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {clientRequest.map(petRequest => 
                      <TableRow key={petRequest.id}>
                        {petRequest.request_status === 1 &&
                        <>
                        <TableCell>{petRequest.pet_name}</TableCell>
                          <TableCell>{moment(petRequest.start_date_time).format("MMM Do YYYY")}</TableCell>
                        <TableCell>{petRequest.pet_type}</TableCell>
                        <TableCell>{petRequest.service_select}</TableCell>
                        <TableCell>
                          <Button
                            size="small"
                            variant="contained"
                            // will need to add a value, (id) for event to capture.
                            onClick={() => this.viewButton(petRequest.id)}
                          >
                            View
                         </Button>
                        </TableCell>
                        </>
                          }
                      </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Container>
            </div>
          )
        })}
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  // not sure about the reducer names yet
  // clientInfo: state.clientInfo,
  vtInfo: reduxState.vtInfo,
  petInfo: reduxState.petInfo,
  clientRequest: reduxState.clientRequestReducer,

});

// export default connect(mapStateToProps)(VTDashboard);
export default withRouter(connect(mapStateToProps)(withStyles(styles, { withTheme: true })(VTDashboard)));
