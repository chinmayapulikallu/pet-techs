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
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import { FormControl } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

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
    paddingTop: 80,
    paddingBottom: 20,
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
  headngTitle: {
    textAlign: "center",
    fontWeight: "bold",
  },
  listItem: {
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 5,
  },
  equipment: {
    marginTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
    maxWidth: "95%",
  },
  size: {
    textAlign: "center",
    backgroundColor: fade("#195C60", 0.25),
    marginBottom: 10,
    marginTop: 10,
    marginRight: 10,
    marginLeft: -5,
  },
});

class VTProfile extends Component {
  state = {
    ...this.props.vtInfo,
    editable: false,
    pottyBreaks: "",
  };

  handleEdit = () => {
    console.log(this.state);
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

  handleToggleChange = (property) => (event) => {
    this.setState({
      [property]: event.target.checked === true,
    });
  };

  handleChecked = (event, property) => {
    if (event.target.checked === true) {
      this.setState({
        [property]: true,
      });
    } else if (event.target.checked === false) {
      this.setState({
        [property]: false,
      });
    }
  };

  handleRadio = (event, property) => {
    console.log("IN HANDLE RADIO", property, event.target.value);
    if (property === "pottyBreaks" && event.target.checked) {
      this.setState({
        [property]: event.target.value,
      });
    }
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
              {this.props.isVetTech && (
                <>
                  <Grid item xs={12} sm={9}>
                    <Typography variant="subtitle1" gutterBottom>
                      This is how your profile appears to the public.
                    </Typography>
                    <Typography variant="subtitle1">
                      If you would like to edit any part of your profile click
                      the edit button.
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
                <Typography variant="h3">
                  {this.state.editable ? (
                    <TextField
                      id="outlined-basic"
                      label="Name"
                      color="secondary"
                      variant="outlined"
                      defaultValue={this.state.vet_name}
                      onChange={this.handleChange("vet_name")}
                    />
                  ) : (
                    this.state.vet_name
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
                  <Typography variant="h5" className={classes.headngTitle}>
                    Services Offered
                  </Typography>
                </header>
                <Typography variant="h6" className={classes.body}>
                  {this.state.editable ? (
                    <>
                      <div className={classes.listItem}>
                        <FormControlLabel
                          label="Pet Sleepovers"
                          control={
                            <Switch
                              checked={this.state.sleep_over}
                              onChange={this.handleToggleChange("sleep_over")}
                              name="checkedPetSleepovers"
                              color="secondary"
                            />
                          }
                        />
                      </div>
                      <div className={classes.listItem}>
                        <FormControlLabel
                          label="Boarding"
                          control={
                            <Switch
                              checked={this.state.boarding}
                              onChange={this.handleToggleChange("boarding")}
                              name="checkedBoarding"
                              color="secondary"
                            />
                          }
                        />
                      </div>
                      <div className={classes.listItem}>
                        <FormControlLabel
                          label="Drop In Care"
                          control={
                            <Switch
                              checked={this.state.dropin_care}
                              onChange={this.handleToggleChange("dropin_care")}
                              name="checkedDropInCare"
                              color="secondary"
                            />
                          }
                        />
                      </div>
                      <div className={classes.listItem}>
                        <FormControlLabel
                          label="Hospice Care"
                          control={
                            <Switch
                              checked={this.state.hospice}
                              onChange={this.handleToggleChange("hospice")}
                              name="checkedHospiceCare"
                              color="secondary"
                            />
                          }
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {this.state.sleep_over ? (
                        <div className={classes.listItem}>Pet Sleepovers</div>
                      ) : (
                        ""
                      )}
                      {this.state.boarding ? (
                        <div className={classes.listItem}>Boarding</div>
                      ) : (
                        ""
                      )}
                      {this.state.dropin_care ? (
                        <div className={classes.listItem}>Drop In Care</div>
                      ) : (
                        ""
                      )}
                      {this.state.hospice ? (
                        <div className={classes.listItem}>Hospice Care</div>
                      ) : (
                        ""
                      )}
                    </>
                  )}
                </Typography>
              </Paper>
              <Paper variant="outlined" className={classes.paper}>
                <header className={classes.header}>
                  <Typography variant="h6">
                    {this.state.vet_name}'s Care Equipment
                  </Typography>
                </header>
                <Typography variant="body1" className={classes.body}>
                  {this.state.editable ? (
                    <TextField
                      className={classes.equipment}
                      id="outlined-basic"
                      label="Equipment List"
                      color="secondary"
                      multiline
                      fullWidth
                      rows={5}
                      variant="outlined"
                      defaultValue={this.state.equipment_list}
                      onChange={this.handleChange("equipment_list")}
                    />
                  ) : (
                    <div className={classes.equipment}>
                      {this.state.equipment_list}
                    </div>
                  )}
                </Typography>
              </Paper>
              <Paper variant="outlined" className={classes.paper}>
                <header className={classes.header}>
                  <Typography variant="h6">
                    {this.state.vet_name}'s Preferences
                  </Typography>
                </header>
                <Typography variant="body1" className={classes.body}>
                  {this.state.editable ? (
                    <>
                      <div>
                        Provides service for:
                        <FormControl>
                          <FormGroup row>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.dogs}
                                  onChange={(event) =>
                                    this.handleChecked(event, "dogs")
                                  }
                                  name="Dogs"
                                />
                              }
                              label="Dogs"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.cats}
                                  onChange={(event) =>
                                    this.handleChecked(event, "cats")
                                  }
                                  name="Cats"
                                />
                              }
                              label="Cats"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.other}
                                  onChange={(event) =>
                                    this.handleChecked(event, "other")
                                  }
                                  name="Other"
                                />
                              }
                              label="Other"
                            />
                          </FormGroup>
                        </FormControl>
                      </div>
                      <div>
                        Bathroom Breaks every:
                        <FormControl component="fieldset">
                          <RadioGroup
                            aria-label="pottyBreaks"
                            name="pottyBreaks"
                            row
                            value={this.value}
                            onChange={(event) =>
                              this.handleRadio(event, "pottyBreaks")
                            }
                          >
                            <FormControlLabel
                              value="zero_two"
                              control={<Radio />}
                              label="0-2"
                            />
                            <FormControlLabel
                              value="two_four"
                              control={<Radio />}
                              label="2-4"
                            />
                            <FormControlLabel
                              value="four_eight"
                              control={<Radio />}
                              label="4-8"
                            />
                            <FormControlLabel
                              value="not_available"
                              control={<Radio />}
                              label="N/A"
                            />
                          </RadioGroup>
                        </FormControl>
                      </div>
                      <div>
                        Animal size prefrences:
                        <FormControl>
                          <FormGroup row>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.small_dog}
                                  onChange={(event) =>
                                    this.handleChecked(event, "small_dog")
                                  }
                                  name="small_dog"
                                />
                              }
                              label="Small"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.medium_dog}
                                  onChange={(event) =>
                                    this.handleChecked(event, "medium_dog")
                                  }
                                  name="medium_dog"
                                />
                              }
                              label="Medium"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.large_dog}
                                  onChange={(event) =>
                                    this.handleChecked(event, "large_dog")
                                  }
                                  name="large_dog"
                                />
                              }
                              label="Large"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.giant_dog}
                                  onChange={(event) =>
                                    this.handleChecked(event, "giant_dog")
                                  }
                                  name="giant_dog"
                                />
                              }
                              label="Giant"
                            />
                          </FormGroup>
                        </FormControl>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={classes.equipment}>
                        Provides services for {this.state.dogs ? "dogs" : ""}{" "}
                        {this.state.cats ? " cats" : ""}{" "}
                        {this.state.other ? " and other types of animals" : ""}
                      </div>
                      <div className={classes.equipment}>
                        Bathroom Breaks every{" "}
                        {this.state.zero_two ? "0-2 hours" : ""}
                        {this.state.two_four ? "2-4 hours" : ""}
                        {this.state.four_eight ? "4-8 hours" : ""}
                        {this.state.not_available ? "Not Applicable" : ""}
                      </div>
                      <div>
                        Animal Size Preferences:
                        <Grid container>
                          {this.state.small_dog ? (
                            <Grid item xs={12} sm={3}>
                              <Paper className={classes.size}>Small</Paper>
                            </Grid>
                          ) : (
                            ""
                          )}
                          {this.state.medium_dog ? (
                            <Grid item xs={12} sm={3}>
                              <Paper className={classes.size}>Medium</Paper>
                            </Grid>
                          ) : (
                            ""
                          )}
                          {this.state.large_dog ? (
                            <Grid item xs={12} sm={3}>
                              <Paper className={classes.size}>Large</Paper>
                            </Grid>
                          ) : (
                            ""
                          )}
                          {this.state.giant_dog ? (
                            <Grid item xs={12} sm={3}>
                              <Paper className={classes.size}>Giant</Paper>
                            </Grid>
                          ) : (
                            ""
                          )}
                        </Grid>
                      </div>
                    </>
                  )}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Typography variant="h6" className={classes.location}>
                {this.state.editable ? (
                  <>
                    <TextField
                      id="outlined-basic"
                      label="City"
                      color="secondary"
                      variant="outlined"
                      size="small"
                      defaultValue={this.state.city}
                      onChange={this.handleChange("city")}
                    />
                    <TextField
                      id="outlined-basic"
                      label="State"
                      color="secondary"
                      variant="outlined"
                      size="small"
                      defaultValue={this.state.state}
                      onChange={this.handleChange("state")}
                    />
                  </>
                ) : (
                  <>
                    {this.state.city}, {this.state.state}
                  </>
                )}
              </Typography>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btn}
                  onClick={this.handleBack}
                  disabled={this.props.isVetTech}
                >
                  Back to Search
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btnRS}
                  disabled={this.props.isVetTech}
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
                  <Typography variant="h6">
                    About {this.state.vet_name}
                  </Typography>
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
  isVetTech: reduxState.user.user_type === 1,
});

export default connect(mapStateToProps)(withStyles(styles)(VTProfile));
