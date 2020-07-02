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
    this.props.dispatch({
      type: "GET_VT_DATA",
      // payload: currentId,
    })
    console.log('component mounted', this.props.match.params.id)
  };
  // not sure if these will be the exact paths, or types, placeholders for now.
  detailsButton = (event) => {
    this.props.dispatch({
      type: "GET_VT_SERVICE_REQUEST_BY_ID",
      payload: event.currentTarget.value,
    });
    this.props.history.push("/vtservicerequest");
  };
  // not sure if these will be the exact paths, or types, placeholders for now.
  viewButton = (event) => {
    this.props.dispatch({
      type: "GET_CARE_PLAN__BY_ID",
      payload: event.currentTarget.value,
    });
    this.props.history.push("/careplan");
  };
  render() {
    const { classes } = this.props;

    return (
      <div>
        {JSON.stringify(this.props.vtInfo)}
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
              </Container>
              <Container>
                <h2>Upcoming Commitments</h2>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Pet Name</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Species Name</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Species</TableCell>
                        <TableCell>
                          <Button
                            size="small"
                            variant="contained"
                            // will need to add a value, (id) for event to capture.
                            onClick={this.viewButton}
                          >
                            View
                    </Button>
                        </TableCell>
                      </TableRow>
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
const mapStateToProps = (state) => ({
  // not sure about the reducer names yet
  clientInfo: state.clientInfo,
  vtInfo: state.vtInfo,

});

// export default connect(mapStateToProps)(VTDashboard);
export default withRouter(connect(mapStateToProps)(withStyles(styles, { withTheme: true })(VTDashboard)));
