import React, { Component } from "react";
import { connect } from "react-redux";
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import { Typography, CardHeader } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Paper from "@material-ui/core/Paper";
import { fade } from "@material-ui/core/styles/colorManipulator";
import Avatar from '@material-ui/core/Avatar';


const styles = (theme) => ({
  root: {
    marginLeft: theme.spacing(20),
    marginRight: theme.spacing(20),
    marginTop: "100px",
  },
  title: {
    textAlign: "center",
  },
  helperText: {
    textAlign: "center",
  },
  boxes: {
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    margin: "20px 30px",
    height: 45,
    width: 180,
    borderRadius: 12,
    display: "flex",
    marginTop: -100,
  },
  searchImage: {
    paddingTop: 50,
  },
  serviceTitle: {
    paddingTop: 50,
    paddingBottom: 10,
  },
  groupCheck: {
    paddingLeft: 50,
  },
  serviceType: {
    paddingLeft: 150,
    display: "flex",
  },
  paper: {
    marginTop: 20,
    borderRadius: "5px",
    width: "75%",
    marginLeft: 150,
    border: "2px solid #195C60",
  },
  profPic: {
    marginTop: 20,
    marginBottom: 20,
    border: "2px solid #F8E16C",
    borderRadius: "50%",
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  header: {
    backgroundColor: fade("#195C60", 0.5),
  },
  btn: {
    marginBottom: 20,
    marginTop: 20,
  },
  certifications: {
    display: "flex",
    backgroundColor: fade("#195C60", 0.25),
    marginBottom: 20,
    paddingLeft: 30,
  },
  aboutMe: {
    display: "flex",
  },
  list: {
    marginBottom: 20,
    marginTop: 10,
  },
});

class SearchPage extends Component {
  state = {
    ...this.props.serviceProvider,
  };

  componentDidMount = () => {
    console.log("MOUNTED)");
    this.getAllVtInfo();
  };

  getAllVtInfo = () => {
    this.props.dispatch({ type: "GET_ALL_VT_DATA" });
  };

  handleChange = (event, property) => {
    console.log(event.target.value, "#####");
    this.setState({
      [property]: event.target.value,
    });
  };

  viewProfileClick = (vet_id) => {
    console.log("CLICKED VIEW PROFILE", vet_id);
    this.props.history.push(`/vt-profile/${vet_id}`);
  };

  //HANDLE SERVICE CHANGES
  handleServiceChange = (event, property) => {
    console.log("CLICKED SERVICE TYPE", event.target.checked, property);
    this.setState({
      [property]: event.target.checked === true,
    });
  };

  petSleepoverCheck = (event) => {
    if (event.target.checked === true) {
      this.props.dispatch({ type: "GET_SLEEPOVER_VETS" });
    } else if (event.target.checked !== "true") {
      this.getAllVtInfo();
    }
  };

  petBoardingCheck = (event) => {
    if (event.target.checked === true) {
      this.props.dispatch({ type: "GET_BOARDING_VETS" });
    } else if (event.target.checked !== "true") {
      this.getAllVtInfo();
    }
  };

  dropInCheck = (event) => {
    if (event.target.checked === true) {
      this.props.dispatch({ type: "GET_DROPIN_VETS" });
    } else if (event.target.checked !== "true") {
      this.getAllVtInfo();
    }
  };

  hospiceCheck = (event) => {
    console.log("HOSPICE CHECK -------------->");
    if (event.target.checked === true) {
      this.props.dispatch({ type: "GET_HOSPICE_VETS" });
    } else if (event.target.checked !== "true") {
      this.getAllVtInfo();
    }
  };

  //HANDLE CHANGES FOR PET TYPE FILTER
  handleCheckChange = (event, property) => {
    console.log(event.target.checked, property);
    this.setState({
      [property]: event.target.checked === true,
    });
  };

  //FILTER CHECK MARKS
  dogCheck = (event) => {
    console.log(event.target.checked);

    if (event.target.checked === true) {
      this.props.dispatch({ type: "GET_DOG_VETS" });
    } else if (event.target.checked !== "true") {
      this.getAllVtInfo();
    }
  };

  catCheck = (event) => {
    if (event.target.checked === true) {
      this.props.dispatch({ type: "GET_CAT_VETS" });
    } else if (event.target.checked !== true) {
      this.getAllVtInfo();
    }
  };

  otherCheck = (event) => {
    if (event.target.checked === true) {
      this.props.dispatch({ type: "GET_OTHER_VETS" });
    } else if (event.target.checked !== true) {
      this.getAllVtInfo();
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div>
          <Grid className={classes.title}>
            <FormControl onSubmit={this.registerUser}>
              <div>
                <img
                  className={classes.searchImage}
                  src="/images/search-mag.png"
                  alt="searchIcon"
                  height="75"
                  width="75"
                />
              </div>
              <Typography className={classes.serviceTitle} variant="h4">
                Find a service provider
              </Typography>
            </FormControl>
            <Typography variant="subtitle1">Filter</Typography>
            <Grid container direction={"row"} className={classes.serviceType}>
              <FormGroup className={classes.groupCheck} row={true}>
                <FormControlLabel
                  control={<Checkbox name="dog" />}
                  onChange={(event) =>
                    this.handleCheckChange(event, "dogFilter")
                  }
                  onChange={(event) => this.dogCheck(event)}
                  value={this.state.dogFilter}
                  label="Dog"
                />
                <FormControlLabel
                  control={<Checkbox name="cat" />}
                  onChange={this.onChange}
                  onChange={(event) =>
                    this.handleCheckChange(event, "catFilter")
                  }
                  onChange={(event) => this.catCheck(event)}
                  value={this.state.catFilter}
                  label="Cat"
                />
                <FormControlLabel
                  control={<Checkbox name="other" />}
                  onChange={(event) =>
                    this.handleCheckChange(event, "otherFilter")
                  }
                  onChange={(event) => this.otherCheck(event)}
                  value={this.state.otherFilter}
                  label="Other"
                />
                <FormControlLabel
                  control={<Checkbox name="petSleepover" />}
                  onChange={(event) =>
                    this.handleServiceChange(event, "petSleepover")
                  }
                  onChange={(event) => this.petSleepoverCheck(event)}
                  value={this.state.petSleepover}
                  label="Pet Sleepover"
                />
                <FormControlLabel
                  control={<Checkbox name="petBoarding" />}
                  onChange={(event) =>
                    this.handleServiceChange(event, "petBoarding")
                  }
                  onChange={(event) => this.petBoardingCheck(event)}
                  value={this.state.petBoarding}
                  label="Pet Boarding"
                />
                <FormControlLabel
                  control={<Checkbox name="dropIn" />}
                  onChange={(event) =>
                    this.handleServiceChange(event, "dropIn")
                  }
                  onChange={(event) => this.dropInCheck(event)}
                  value={this.state.dropIn}
                  label="Drop-In"
                />
                <FormControlLabel
                  control={<Checkbox name="hospice" />}
                  onChange={(event) =>
                    this.handleServiceChange(event, "hospice")
                  }
                  onChange={(event) => this.hospiceCheck(event)}
                  value={this.state.hospice}
                  label="Hospice"
                />
              </FormGroup>
            </Grid>
            {this.props.vtInfo.map((vet, index) => {
              return (
                <Grid>
                  <Paper elevation={5} className={classes.paper}>
                    <div key={vet.id}>
                      <CardHeader
                        title={vet.vet_name}
                        className={classes.header}
                      />

                      {vet.profile_img ===
                      "3e541de1f0419c15034e45c05eb3becd" ? (
                        <>
                          <img className={classes.profPic} src="images/blank-profile-picture.png" alt="profile" height="150" width="150" />
                        </>
                      ) : (
                        <img
                          className={classes.profPic}
                          src={vet.media_url}
                          alt="profilePic"
                        />
                      )}

                      <Typography
                        className={classes.certifications}
                        variant="h6"
                      >
                        Certifications:
                      </Typography>
                      <div className={classes.outlined}>
                        <Typography
                          className={classes.list}
                          variant="subtitle1"
                        >
                          {vet.expertise}
                        </Typography>
                      </div>
                      <div className={classes.outlined}>
                        <Typography
                          className={classes.certifications}
                          variant="h6"
                        >
                          About me:
                        </Typography>
                      </div>
                      <div className={classes.outlined}>
                        <Typography variant="subtitle1">
                          {vet.bioyourself}
                        </Typography>
                      </div>
                      <Button
                        className={classes.btn}
                        onClick={() => this.viewProfileClick(vet.user_id)}
                        variant="contained"
                        color="primary"
                      >
                        View Profile
                      </Button>
                    </div>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  vtInfo: state.vtInfo,
  serviceProvider: {
    service_filter: "",
    dogFilter: false,
    catFilter: false,
    otherFilter: false,
    petSleepover: false,
    petBoarding: false,
    dropIn: false,
    hospice: false,
  },
});

export default withRouter(
  connect(mapStateToProps)(withStyles(styles)(SearchPage))
);
