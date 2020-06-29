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

const PROFILE_IMG_HEIGHT = 225;

const styles = (theme) => ({
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
    backgroundColor: fade("#FFC2B4", 0.25),
    paddingBottom: 10,
  },
  editContainer: {
    paddingTop: 100,
    paddingBottom: 50,
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
    marginTop: 10,
    marginBottom: 30,
  },
  btn: {
    marginRight: 20,
  },
  profilePic: {
    marginTop: -(PROFILE_IMG_HEIGHT / 3),
    height: PROFILE_IMG_HEIGHT,
    borderRadius: "50%",

    [theme.breakpoints.down("xs")]: {
      marginTop: 10,
    },
  },
  profilePicContainer: {
    display: "flex",
    justifyContent: "center",
  },
  pic: {
    marginTop: 20,
  },
});

class VTProfile extends Component {
  state = {
    ...this.props.vtInfo,
    editable: false,
  };

  handleEdit = () => {
    console.log(this.props.vtInfo);
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

  handleBack = () => {
    console.log(this.state);
  };

  componentDidMount() {
    console.log(`HERE!!!!!`, this.props.vtInfo);
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.mainHeader}>
          <Container maxWidth="md" className={classes.root}>
            <Grid container spacing={10} className={classes.editContainer}>
              {false && (
                <>
                  <Grid item xs={12} sm={9}>
                    <Typography variant="h6">
                      This is where the public will see your text yayadsa
                      sdafsdfa sdfasd asdf sdfasdfa sdfa sdfasd fad
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.btn}
                      onClick={this.handleEdit}
                    >
                      {this.state.editable ? "Save" : "Edit"}
                    </Button>
                  </Grid>
                </>
              )}
            </Grid>
          </Container>
          <Container maxWidth="md" classesName={classes.root}>
            <Grid container spacing={10}>
              <Grid item xs={12} sm={5}></Grid>
              <Grid item xs={12} sm={7}>
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
              </Grid>
            </Grid>
          </Container>
        </div>
        <Container maxWidth="md" classesName={classes.root}>
          <Grid container spacing={10}>
            <Grid item xs={12} sm={5}>
              <div className={classes.profilePicContainer}>
                <img
                  className={classes.profilePic}
                  src={this.state.profile_img}
                  alt="Profile Picture"
                />
              </div>

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
              <Paper variant="outlined" className={classes.paper}>
                <header className={classes.header}>
                  <Typography variant="h6">NAME's Preferences</Typography>
                </header>
                <Typography variant="body1" className={classes.body}>
                  Preferences here
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Typography variant="subtitle1" className={classes.location}>
                Location
              </Typography>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btn}
                  onClick={this.handleBack}
                >
                  Back to Search
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btnRS}
                >
                  Request Service
                </Button>
              </div>
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
              <Grid container spacing={5}>
                <Grid item xs={12} sm={8}>
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
                <Grid item xs={12} sm={3}>
                  <img
                    src="/images/careTakerDog.png"
                    alt="Care Taker"
                    height="150"
                    className={classes.pic}
                  />
                </Grid>
              </Grid>
            </Grid>
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
