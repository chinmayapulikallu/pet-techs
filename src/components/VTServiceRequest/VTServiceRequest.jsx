import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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
    marginRight: 10,
  },
  titleOfReq: {
    color: "white",
    paddingRight: 10,
    paddingLeft: 10,
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
};

class VTServiceRequest extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Container className={classes.root}>
        <Typography variant="h4" className={classes.title}>
          Service Request for NAME
        </Typography>
        <Typography variant="h5" className={classes.subtitle}>
          NAME is requesting the following services:
        </Typography>
        <div className={classes.req}>
          <Paper className={classes.typeOfReq}>
            <Typography variant="h6" className={classes.titleOfReq}>
              TYPE OF REQUEST
            </Typography>
          </Paper>
        </div>
        <Typography variant="h6">For</Typography>
        <div className={classes.req}>
          <Paper className={classes.typeOfReq} onClick={this.handleCarePlan}>
            <Typography variant="h6" className={classes.titleOfReq}>
              LOOP for PET NAMES
            </Typography>
            <Typography variant="subtitle1" className={classes.titleOfReq}>
              Care plan
            </Typography>
          </Paper>
        </div>
        <Grid container>
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
                  START DATE
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
                  END DATE
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
                ADDITIONAL INFORMATION
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

const mapStateToProps = (reduxState) => ({
  vtRequest: reduxState.vtRequest,
});

export default connect(mapStateToProps)(withStyles(styles)(VTServiceRequest));
