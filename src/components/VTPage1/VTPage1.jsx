import React, { Component } from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Switch from "@material-ui/core/Switch";

const styles = {
  root: {
    marginTop: 20,
    marginBottom: 40,
    textAlign: "center",
  },
  inputs: {
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    justifyContent: "space-between",
  },
  flex: {
    flexGrow: 1,
    marginRight: 10,
  },
  city: {
    width: "50%",
    marginRight: 10,
  },
  btn: {
    marginTop: 20,
    marginBottom: 20,
    height: 45,
    widith: 180,
    borderRadius: 12,
  },
  botBtn: {
    margin: "20px 30px 20px 30px",
    height: 45,
    width: 180,
    borderRadius: 12,
  },
  card: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "left",
    border: "2px solid #195C60",
  },
  cardBox: {
    textAlign: "center",
    width: "85%",
  },
  toggle: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    marginTop: -6,
    marginRight: 20,
  },
  description: {
    marginLeft: 60,
  },
  switch: {
    marginTop: -10
  },
  title: {
    marginTop: 100
  }
};

class VTPage1 extends Component {
  state = {
    ...this.props.vtInfo,
  };

  handleInputChange = (property) => (event) => {
    this.setState({
      [property]: event.target.value,
    });
  };

  handleToggleChange = (property) => (event) => {
    this.setState({
      [property]: event.target.checked === true,
    });
  };

  handleUploadPhoto = () => {
    alert("Photo upload needs set up");
  };

  handleNext = () => {
    console.log(this.state);
  };
  render() {
    const { classes } = this.props;
    return (
      <Container className={classes.root} maxWidth="sm">
        <Typography variant="h3" className={classes.title}>
          Hi NAME! Let's set up your profile!
        </Typography>
        <div className={classes.inputs}>
          <TextField
            id="outlined-basic"
            label={"Home Address"}
            fullWidth
            color="secondary"
            variant="outlined"
            value={this.state.home_adress_house}
            onChange={this.handleInputChange("home_address_house")}
          />
        </div>
        <div className={classes.inputs}>
          <TextField
            id="outlined-basic"
            label={"Apartment or Suite #"}
            fullWidth
            color="secondary"
            variant="outlined"
            value={this.state.apt_suite}
            onChange={this.handleInputChange("apt_suite")}
          />
        </div>
        <div className={classes.inputs}>
          <TextField
            id="outlined-basic"
            label={"City"}
            variant="outlined"
            value={this.state.city}
            color="secondary"
            onChange={this.handleInputChange("city")}
            className={classes.city}
          />
          <TextField
            id="outlined-basic"
            label={"State"}
            variant="outlined"
            value={this.state.state}
            color="secondary"
            onChange={this.handleInputChange("state")}
            className={classes.flex}
          />
          <TextField
            id="outlined-basic"
            label={"Zipcode"}
            variant="outlined"
            color="secondary"
            value={this.state.zipcode}
            onChange={this.handleInputChange("zipcode")}
          />
        </div>
        <div>
          <Typography variant="h5">
            You look purr-fect! Let's add a photo for your profile!
          </Typography>
          <Button
            className={classes.btn}
            onClick={this.handleUploadPhoto}
            variant="contained"
            color="primary"
          >
            Select Photo to Upload
          </Button>
        </div>
        <div>
          <Typography variant="h5">
            Tell us which services you'd like to offer.
          </Typography>
          <Typography variant="body1">
            Toggle selections to inculde them in your profile.
          </Typography>
          <Container className={classes.cardBox}>
            <Card className={classes.card}>
              <CardContent>
                <div className={classes.toggle}>
                  <img
                    className={classes.logo}
                    src="/images/sleepover-icon.png"
                    alt="Sleepover"
                    height="50"
                    width="50"
                  />
                  <Typography variant="h5" className={classes.flex}>
                    Pet Sleepover
                  </Typography>
                  <CardActions>
                    <Switch
                      checked={this.state.sleep_over}
                      onChange={this.handleToggleChange("sleep_over")}
                      size="medium"
                      name="petSleepover"
                      className={classes.switch}
                    />
                  </CardActions>
                </div>
                <Typography
                  color="textSecondary"
                  className={classes.description}
                >
                  You care for pets in the owner's home.
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent>
                <div className={classes.toggle}>
                  <img
                    className={classes.logo}
                    src="/images/boarding-icon.png"
                    alt="Boarding"
                    height="50"
                    width="50"
                  />
                  <Typography variant="h5" className={classes.flex}>
                    Pet Boarding
                  </Typography>
                  <CardActions>
                    <Switch
                      checked={this.state.boarding}
                      onChange={this.handleToggleChange("boarding")}
                      size="medium"
                      name="petBoarding"
                      className={classes.switch}
                    />
                  </CardActions>
                </div>
                <Typography
                  color="textSecondary"
                  className={classes.description}
                >
                  You care for pets at your home.
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent>
                <div className={classes.toggle}>
                  <img
                    className={classes.logo}
                    src="/images/drop-in-care-icon.png"
                    alt="Drop In Care"
                    height="50"
                    width="50"
                  />
                  <Typography variant="h5" className={classes.flex}>
                    Drop In Care
                  </Typography>
                  <CardActions>
                    <Switch
                      checked={this.state.dropin_care}
                      onChange={this.handleToggleChange("dropin_care")}
                      size="medium"
                      name="dropInCare"
                      className={classes.switch}
                    />
                  </CardActions>
                </div>
                <Typography
                  color="textSecondary"
                  className={classes.description}
                >
                  You provide medical services in a client's home.
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent>
                <div className={classes.toggle}>
                  <img
                    className={classes.logo}
                    src="/images/hospice-icon.png"
                    alt="Hospice"
                    height="50"
                    width="50"
                  />
                  <Typography variant="h5" className={classes.flex}>
                    Hospice Care
                  </Typography>
                  <CardActions>
                    <Switch
                      checked={this.state.hospice}
                      onChange={this.handleToggleChange("hospice")}
                      size="medium"
                      name="hospiceCare"
                      className={classes.switch}
                    />
                  </CardActions>
                </div>
                <Typography
                  color="textSecondary"
                  className={classes.description}
                >
                  You care for pets in client's home with hospice needs and
                  services.
                </Typography>
              </CardContent>
            </Card>
          </Container>
          <div>
            <Typography variant="h5">Tell us more about yourself!</Typography>
            <TextField
              value={this.state.bio}
              label={"About your house, lifestyle, and pets..."}
              variant="outlined"
              className={classes.inputs}
              fullWidth
              color="secondary"
              multiline
              rows={7}
              onChange={this.handleInputChange("bio")}
            />
          </div>
          <div>
            <Button
              className={classes.botBtn}
              onClick={this.handleBack}
              variant="contained"
              color="primary"
            >
              Back
            </Button>
            <Button
              className={classes.botBtn}
              onClick={this.handleNext}
              variant="contained"
              color="primary"
            >
              Save and Continue
            </Button>
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  vtInfo: {
    home_address_house: "",
    apt_suite: "",
    city: "",
    state: "",
    zipcode: "",
    profile_img: "",
    sleep_over: false,
    boarding: false,
    dropin_care: false,
    hospice: false,
    bio: "",
    ...state.vtInfo, // overrides default with any existing vt values
  },
  errors: state.errors,
});

export default connect(mapStateToProps)(withStyles(styles)(VTPage1));
