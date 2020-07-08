import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  landingPg: {
    borderRadius: 0,
    width: "100%",
    height: "auto",
    position: "relative",
  },
  description: {
    textAlign: "center",
    fontFamily: "Quicksand",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 400,
    marginLeft: 400,
    color: "#195C60",
    paddingTop: 20,
    paddingBottom: 20,
  },
  image: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 0,
    paddingTop: 25,
    width: 200,
    height: 200,
  },
  missionHeader: {
    textAlign: "center",
    fontFamily: "Quicksand",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 400,
    marginLeft: 400,
    paddingTop: 100,
    paddingBottom: 20,
  },
  btn: {
    height: 50,
    width: 200,
    borderRadius: 12,
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    marginTop: 25,
  },
});

class About extends Component {
  handleJoinClick = () => {
    this.props.history.push("/register");
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid>
        <div>
          <Typography className={classes.missionHeader} variant="h3">
            Our Mission
          </Typography>
          <img
            className={classes.image}
            src="/images/mission-logo.png"
            alt="missionLogoIcon"
            height="300"
            width="300"
          />
        </div>
        <div>
          <Typography className={classes.description} variant="h5">
            We're here to connect vetinary technicians with pet owners who want
            to hire qualified individuals to help give different kinds of
            out-of-clinic care. Either in your home or theirs, you want to know
            your precious animals are in great hands. We are commited to giving
            quality and professional care and to give you ease of mind.{" "}
          </Typography>
          <Button
            className={classes.btn}
            onClick={this.handleJoinClick}
            variant="contained"
            color="primary"
          >
            Join
          </Button>
        </div>
        <Grid></Grid>
      </Grid>
    );
  }
}
export default withStyles(styles)(About);
