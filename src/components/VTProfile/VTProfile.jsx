import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const styles = {
  root: {
    marginTop: 20,
    marginBottom: 40,
    textAlign: "center",
  },
  paper: {
    border: "2px solid #195C60",
    borderRadius: 5,
    marginTop: 50,
  },
  mainHeader: {
    paddingTop: 150,
    backgroundColor: fade("#FFC2B4", 0.25),
    textAlign: "center",
    paddingBottom: 10,
  },
  header: {
    backgroundColor: fade("#195C60", 0.25),
    paddingLeft: 10,
    paddingTop: 2.5,
    paddingBottom: 2.5,
  },
  body: {
    paddingLeft: 15,
    paddingTop: 2.5,
    paddingBottom: 2.5,
  },
  location: {
    textAlign: "center",
    paddingTop: 10,
  },
  btnCon: {
    textAlign: "right",
  },
  btn: {
    marginTop: 40,
    marginRight: 20,
  },
  btnRS: {
    marginTop: 40,
    marginRight: 100,
  },
  serv: {
    marginTop: 100,
  },
  about: {
    marginTop: -100,
  },
  equip: {
    marginTop: -70,
  },
  exp: {
    marginTop: -60,
  },
  pic: {
    marginRight: 50
  },
  pref: {
marginTop: -110
  }
};

class VTProfile extends Component {
  state = {
    ...this.props.vtInfo,
    editable: false,
  };

  handleEdit = () => {
      console.log(this.props.vtInfo)
    this.setState((prevState) => ({
      editable: !prevState.editable,
    }));
  };

  handleChange = (property) => (event) => {
    console.log(event.target.value, property);
      this.setState({
        [property]: event.target.value,
      });
  };

  componentDidMount() {
    console.log(`HERE!!!!!`, this.props.vtInfo);
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.mainHeader}>
          <Typography variant="h4">
            {this.state.editable ? (
              <TextField
                id="outlined-basic"
                color="secondary"
                variant="outlined"
                defaultValue={this.state.username}
                onChange={this.handleChange("username")}
              />
            ) : (
              this.state.username
            )}
          </Typography>
        </div>
        <Container maxWidth="md" classesName={classes.root}>
          <Typography variant="subtitle1" className={classes.location}>
            Location
          </Typography>
          <div className={classes.btnCon}>
            <Button variant="contained" color="primary" className={classes.btn}>
              Back to Search
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.btnRS}
            >
              Request Service
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.btn}
              onClick={this.handleEdit}
            >
              {this.state.editable ? "Save" : "Edit"}
            </Button>
          </div>
          <Grid container direction="row" justify="space-between" spacing={10}>
            <Grid item xs={5} className={classes.serv}>
              <Paper variant="outlined" className={classes.paper}>
                <header className={classes.header}>
                  <Typography variant="h6">Services Offered</Typography>
                </header>
                <Typography variant="body1" className={classes.body}>
                  <li>Pet Sleepover</li>
                  <li>Pet Sleepover</li>
                  <li>Pet Sleepover</li>
                  <li>Pet Sleepover</li>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={7}>
              <Paper variant="outlined" className={classes.paper}>
                <header className={classes.header}>
                  <Typography variant="h6">Qualifications</Typography>
                </header>
                <Typography variant="body1" className={classes.body}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={5} className={classes.equip}>
              <Paper variant="outlined" className={classes.paper}>
                <header className={classes.header}>
                  <Typography variant="h6">NAME's Care Equipment</Typography>
                </header>
                <Typography variant="body1" className={classes.body}>
                  <li>Pet Sleepover</li>
                  <li>Pet Sleepover</li>
                  <li>Pet Sleepover</li>
                  <li>Pet Sleepover</li>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={7} className={classes.about}>
              <Paper variant="outlined" className={classes.paper}>
                <header className={classes.header}>
                  <Typography variant="h6">About NAME</Typography>
                </header>
                <Typography variant="body1" className={classes.body}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={5} className={classes.pref}>
              <Paper variant="outlined" className={classes.paper}>
                <header className={classes.header}>
                  <Typography variant="h6">NAME's Preferences</Typography>
                </header>
                <Typography variant="body1" className={classes.body}>
                  Preferences here
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={5} className={classes.exp}>
              <Paper variant="outlined" className={classes.paper}>
                <header className={classes.header}>
                  <Typography variant="h6">
                    Experience & Relevant Skills
                  </Typography>
                </header>
                <Typography variant="body1" className={classes.body}>
                  Experience & Relevant Skills here
                </Typography>
              </Paper>
            </Grid>

            <img
              src="/images/careTakerDog.png"
              alt="Care Taker"
              height="150"
              className={classes.pic}
            />
          </Grid>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  vtInfo: reduxState.vtInfo,
  user: reduxState.user,
});

export default connect(mapStateToProps)(withStyles(styles)(VTProfile));
