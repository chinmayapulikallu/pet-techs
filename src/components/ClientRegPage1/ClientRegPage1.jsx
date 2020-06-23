import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ToggleButton from "@material-ui/lab/ToggleButton";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
// import { withRouter } from 'react-router-dom';

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
  title: {
    marginTop: 100,
  },
};

class ClientRegPage1 extends Component {
  state = {
    ...this.props.clientInfo,
  };

  handleChange = (event, property) => {
    console.log("in handleChange", event.target.value, property);
    if (event.target.value === "true" || event.target.value === "false") {
      this.setState({
        [property]: event.target.value === "true",
      });
    } else {
      this.setState({
        [property]: event.target.value,
      });
    }
  };

  handleUploadPhoto = () => {
    alert("Photo set up needs to be set up");
  };

  handleClick = () => {
    this.props.history.push("/creg2");
  };
  render() {
    const { classes } = this.props;
    return (
      <Container className={classes.root} maxWidth="sm">
        <Typography>All fields required*</Typography>
        <Typography variant="h4" className={classes.title}>
          Hi NAME! Let's set up your profile
        </Typography>
        <Typography variant="h5">
          This information will be displayed on your profile
        </Typography>
        <div className={classes.inputs}>
          <TextField
            id="outlined-basic"
            label={"Home Address"}
            fullWidth
            color="secondary"
            variant="outlined"
            value={this.state.home_adress_house}
            onChange={(event) => this.handleChange(event, "home_address_house")}
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
            onChange={(event) => this.handleChange(event, "apt_suite")}
          />
        </div>
        <div className={classes.inputs}>
          <TextField
            id="outlined-basic"
            label={"City"}
            variant="outlined"
            value={this.state.city}
            color="secondary"
            onChange={(event) => this.handleChange(event, "city")}
            className={classes.city}
          />
          <TextField
            id="outlined-basic"
            label={"State"}
            variant="outlined"
            value={this.state.state}
            color="secondary"
            onChange={(event) => this.handleChange(event, "state")}
            className={classes.flex}
          />
          <TextField
            id="outlined-basic"
            label={"Zipcode"}
            variant="outlined"
            color="secondary"
            value={this.state.zipcode}
            onChange={(event) => this.handleChange(event, "zipcode")}
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
          <Typography variant="h6">
            Help providers get to you know you and a bit about your animals that
            will be displayed on your profile - write a quick bio and whatever
            else you would like to add!
          </Typography>
          <TextField
            value={this.state.about_client}
            variant="outlined"
            className={classes.inputs}
            fullWidth
            color="secondary"
            multiline
            rows={5}
            onChange={(event) => this.handleChange(event, "about_client")}
          />
        </div>
        <div>
          <Typography variant="h6">
            Describe a bit about your home environment and space for providers
            to get a sense of where they might provide services
          </Typography>
          <TextField
            value={this.state.about_home}
            variant="outlined"
            className={classes.inputs}
            fullWidth
            color="secondary"
            multiline
            rows={5}
            onChange={(event) => this.handleChange(event, "about_home")}
          />
        </div>
        <Typography variant="h5">
          Please enter emergency contact information
        </Typography>
        <Typography variant="h6">
          This person would be notified as ta person of contact for any
          emergencies or critical needs and would be contacted if you aren't
          able to be reached by the service provider.
        </Typography>
        <div className={classes.inputs}>
          <TextField
            id="outlined-basic"
            fullWidth
            label={"Emergency Contact Name"}
            color="secondary"
            variant="outlined"
            value={this.state.contact_name_1}
            onChange={(event) => this.handleChange(event, "contact_name_1")}
          />
        </div>
        <div className={classes.inputs}>
          <TextField
            id="outlined-basic"
            label={"Emergency Contact Phone"}
            variant="outlined"
            value={this.state.contact_phone_1}
            color="secondary"
            onChange={(event) => this.handleChange(event, "contact_phone_1")}
            className={classes.em_phone}
          />
          <TextField
            id="outlined-basic"
            label={"Emergency Contact Email"}
            variant="outlined"
            color="secondary"
            value={this.state.contact_email_1}
            onChange={(event) => this.handleChange(event, "contact_email_1")}
          />
        </div>
        <Typography variant="h5">
          Please enter your preferred vet clinic information
        </Typography>
        <div className={classes.inputs}>
          <TextField
            id="outlined-basic"
            label={"Vet Clinic Name"}
            variant="outlined"
            value={this.state.vet_clinic}
            color="secondary"
            onChange={(event) => this.handleChange(event, "vet_clinic")}
            className={classes.city}
          />
          <TextField
            id="outlined-basic"
            label={"Vet Clinic Phone"}
            variant="outlined"
            value={this.state.clinic_phone}
            color="secondary"
            onChange={(event) => this.handleChange(event, "clinic_phone")}
            className={classes.flex}
          />
          <TextField
            id="outlined-basic"
            label={"Vet Clinic Address (street and city)"}
            variant="outlined"
            color="secondary"
            value={this.state.clinic_address}
            onChange={(event) => this.handleChange(event, "clinic_address")}
          />
        </div>
        <Typography variant="h6">
          Are you Ok with a Vet Tech transporting your animal to the Vet in an
          emergency?
        </Typography>
        <div className={classes.input}>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="transport"
              name="transport"
              value={String(this.state.transport)}
              onChange={(event) => this.handleChange(event, "transport")}
            >
              <FormControlLabel value="false" control={<Radio />} label="No" />
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
            </RadioGroup>
          </FormControl>
        </div>
        <Button
          color="primary"
          variant="contained"
          className={classes.btn}
          onClick={this.handleClick}
        >
          Continue to Add Pets
        </Button>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  clientInfo: {
    home_address_house: "",
    apt_suite: "",
    city: "",
    state: "",
    zip_code: "",
    about_client: "",
    about_home: "",
    contact_name_1: "",
    contact_phone_1: "",
    contact_email_1: "",
    vet_clinic: "",
    clinic_address: "",
    clinic_phone: "",
    transport: false,
    ...state.clientInfo,
  },
});

export default connect(mapStateToProps)(
  withStyles(styles)(ClientRegPage1));
