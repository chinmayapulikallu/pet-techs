import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
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
import Avatar from "@material-ui/core/Avatar";

const moment = require("moment");

const styles = (theme) => ({
  img: {
    borderRadius: "50%",
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
  button: {
    backgroundColor: "#FFC2B4",
  },
});

class VTDashboard extends Component {
  // get dashboard info for Vet Tech
  componentDidMount = () => {
    this.props.dispatch({
      type: "GET_VT_DATA",
    });
    this.props.dispatch({
      type: "GET_VT_SERVICE_REQUEST",
    });
  };

  detailsButton = (requestID) => {
    this.props.history.push(`/vt-service/${requestID}`);
  };

  viewButton = (petID) => {
    this.props.history.push(`/careplan/${petID}`);
    this.props.dispatch({
      type: "GET_PET_CARE_PLAN",
      payload: { id: petID },
    });
  };
  render() {
    const { classes, clientRequest } = this.props;

    return (
      <div>
        {this.props.vtInfo.map((vt) => {
          return (
            <div key={vt.id}>
              <Container>
                {vt.profile_img === "3e541de1f0419c15034e45c05eb3becd" ? (
                  <>
                    <Avatar
                      className={classes.img}
                      src="images/blank-profile-picture.png"
                      alt="profile"
                    />
                  </>
                ) : (
                  <Avatar
                    className={classes.img}
                    src={vt.media_url}
                    alt={vt.profile_img}
                  />
                )}
                <Typography variant="h6">
                  Pending Requests (
                  {clientRequest.filter((cr) => cr.request_status === 0).length}
                  )
                </Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Service Start Date</TableCell>
                        <TableCell>Service End Date</TableCell>
                        <TableCell>Client Name</TableCell>
                        <TableCell>Client Email</TableCell>
                        <TableCell>Service Type</TableCell>
                        <TableCell>Details</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {clientRequest.map((request) => (
                        <TableRow key={request.id}>
                          {request.request_status === 0 && (
                            <>
                              <TableCell>{request.pet_name}</TableCell>
                              <TableCell>
                                {moment(request.start_date_time).format(
                                  "MMM Do YYYY"
                                )}
                              </TableCell>
                              <TableCell>
                                {moment(request.end_date_time).format(
                                  "MMM Do YYYY"
                                )}
                              </TableCell>
                              <TableCell>{request.client_name}</TableCell>
                              <TableCell>{request.user_email}</TableCell>
                              <TableCell>{request.service_select}</TableCell>
                              <TableCell>
                                <Button
                                  className={classes.button}
                                  size="small"
                                  variant="contained"
                                  onClick={() => this.detailsButton(request.id)}
                                >
                                  Details
                                </Button>
                              </TableCell>
                            </>
                          )}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Container>
              <Container>
                <Typography variant="h6">
                  Upcoming Commitments (
                  {clientRequest.filter((cr) => cr.request_status === 1).length}
                  )
                </Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Pet Name</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Species Name</TableCell>
                        <TableCell>Client Name</TableCell>
                        <TableCell>Client Email</TableCell>
                        <TableCell>Client Phone</TableCell>
                        <TableCell>Service Type</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {clientRequest.map((petRequest) => (
                        <TableRow key={petRequest.id}>
                          {petRequest.request_status === 1 && (
                            <>
                              <TableCell>{petRequest.pet_name}</TableCell>
                              <TableCell>
                                {moment(petRequest.start_date_time).format(
                                  "MMM Do YYYY"
                                )}
                              </TableCell>
                              <TableCell>{petRequest.pet_type}</TableCell>
                              <TableCell>{petRequest.client_name}</TableCell>
                              <TableCell>{petRequest.user_email}</TableCell>
                              <TableCell>{petRequest.phone_number}</TableCell>
                              <TableCell>{petRequest.service_select}</TableCell>
                              <TableCell>
                                <Button
                                  size="small"
                                  variant="contained"
                                  className={classes.button}
                                  onClick={() =>
                                    this.viewButton(petRequest.pet_id)
                                  }
                                >
                                  View
                                </Button>
                              </TableCell>
                            </>
                          )}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Container>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  vtInfo: reduxState.vtInfo,
  petInfo: reduxState.petInfo,
  clientRequest: reduxState.clientRequestReducer,
});

export default withRouter(
  connect(mapStateToProps)(withStyles(styles, { withTheme: true })(VTDashboard))
);
