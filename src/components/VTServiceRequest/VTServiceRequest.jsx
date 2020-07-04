import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
const moment = require("moment");

const styles = {
  root: {
    textAlign: "center",
  },
  title: {
    marginTop: 150,
    fontWeight: "bold",
    marginBottom: 25,
  },
  subtitle: {
    marginBottom: 25,
  },
  typeOfReq: {
    backgroundColor: "#195C60",
  },
  titleOfReq: {
    color: "white",
    paddingRight: 10,
    paddingLeft: 10,
  },
  pet: {
    color: "white",
    padding: 25,
  },
  req: {
    display: "flex",
    justifyContent: "center",
  },
  dateOfReq: {
    border: "2px solid #195C60",
  },
  date: {
    paddingRight: 20,
    paddingLeft: 20,
  },
  dateTitle: {
    marginTop: 25,
    marginBottom: 10,
  },
  pic: {
    marginTop: 65,
    textAlign: "right",
  },
  addInfo: {
    marginTop: 50,
    marginBottom: 10,
  },
  info: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  btnGroup: {
    marginTop: 65,
  },
  btn: {
    marginRight: 30,
    marginLeft: 30,
  },
  for: {
    marginTop: 10,
    marginBottom: 10,
  },
};

class VTServiceRequest extends Component {
  handleAccept = () => {
    this.props.dispatch({
      type: "ACCEPT/DECLINE_REQ",
      payload: { id: this.props.request.id, request_status: 1 },
    });
  };

  handleDecline = () => {
    this.props.dispatch({
      type: "ACCEPT/DECLINE_REQ",
      payload: {id: this.props.request.id, request_status: 2},
    });
  };

  handleBack = () => {};

  render() {
    const { classes } = this.props;
    return (
      <Container className={classes.root}>
        <Typography variant="h4" className={classes.title}>
          Service Request for {this.props.vtInfo.vet_name}
        </Typography>
        <Typography variant="h5" className={classes.subtitle}>
          {this.props.request.client_name} is requesting the following services:
        </Typography>
        <div className={classes.req}>
          <Paper className={classes.typeOfReq}>
            <Typography variant="h6" className={classes.titleOfReq}>
              {this.props.request.service_select}
            </Typography>
          </Paper>
        </div>
        <Typography variant="h6" className={classes.for}>
          For
        </Typography>
        <div className={classes.req}>
          <Paper className={classes.typeOfReq}>
            <Typography variant="h6" className={classes.pet}>
              {this.props.request.pet_name}
            </Typography>
          </Paper>
        </div>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={5}>
            <div className={classes.pic}>
              <img src="images/calendar.png" height="100" alt="profile" />
            </div>
          </Grid>
          <Grid item xs={12} sm={3}>
            <div className={classes.dateTitle}>
              <Typography variant="h7">Start Day and Time</Typography>
            </div>
            <div className={classes.req}>
              <Paper className={classes.dateOfReq}>
                <Typography variant="h6" className={classes.date}>
                  {moment(this.props.request.start_date_time).format(
                    "MMM Do YYYY"
                  )}
                </Typography>
              </Paper>
            </div>
            <div className={classes.dateTitle}>
              <Typography variant="h7" className={classes.dateTitle}>
                End Day and Time
              </Typography>
            </div>
            <div className={classes.req}>
              <Paper className={classes.dateOfReq}>
                <Typography variant="h6" className={classes.date}>
                  {moment(this.props.request.end_date_time).format(
                    "MMM Do YYYY"
                  )}
                </Typography>
              </Paper>
            </div>
          </Grid>
        </Grid>
        <div>
          <Typography variant="h6" className={classes.addInfo}>
            Any addtional information for the vet tech?
          </Typography>
          <div className={classes.req}>
            <Paper className={classes.dateOfReq}>
              <Typography variant="h6" className={classes.info}>
                {this.props.request.add_info}
              </Typography>
            </Paper>
          </div>
        </div>
        <div className={classes.btnGroup}>
          <Button
            onClick={this.handleAccept}
            variant="contained"
            color="primary"
            className={classes.btn}
          >
            Accept
          </Button>
          <Button
            onClick={this.handleDecline}
            variant="contained"
            color="primary"
            className={classes.btn}
          >
            Decline
          </Button>
        </div>
        <div>
          <Button className={classes.btnGroup} onClick={this.handleBack}>
            Back to Dashboard
          </Button>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (reduxState, ownProps) => {
  const requestId = Number(ownProps.match.params.id);
  const request = reduxState.clientRequestReducer.filter(
    (request) => request.id === requestId
  )[0];
  return {
    request,
    vtInfo: reduxState.vtInfo[0],
  };
};

export default connect(mapStateToProps)(withStyles(styles)(VTServiceRequest));
