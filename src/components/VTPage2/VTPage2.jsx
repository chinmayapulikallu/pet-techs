import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import FormControl from "@material-ui/core/FormControl";
import { FormControlLabel } from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import FormHelperText from "@material-ui/core/FormHelperText";
import Radio from "@material-ui/core/Radio";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import RadioGroup from "@material-ui/core/RadioGroup";

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
  button: {
    margin: "20px 30px 20px 30px",
    height: 45,
    width: 180,
    borderRadius: 12,
  },
});

class VTPage2 extends Component {
  state = {
    ...this.props.vtInfoPage2,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  //THIS WILL HANDLE ALL THE INPUTS FROM THE VET TECH PREFERENCES
  handleChange = (event, property) => {
    if (event.target.value === "true" || event.target.value === "false") {
      this.setState({
        [property]: event.target.value === "true",
      });
    } else {
      this.setState({
        [property]: event.target.checked === true,
      });
    }
  };

  handleBackClick = () => {
    this.props.onBack();
  };

  //THIS WILL TAKE THE VET TECH TO THE 3RD VET TECH REGISTRATION PAGE
  //AND DISPATCH THE STATE
  handleContClick = () => {
    this.props.dispatch({
      type: "SET_VT_DATA_PAGE_2",
      payload: { ...this.state },
    });
    this.props.onNext();
  };

  handleInputChange = (event, property) => {
    if (event.target.value === "true" || event.target.value === "false") {
      this.setState({
        [property]: event.target.checked === true,
      });
    } else {
      this.setState({
        [property]: event.target.value,
      });
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.title}>
          <h2>What are your service preferences</h2>
        </div>
        <br />
        <Grid container justify="center" spacing={3}>
          <FormControl>
            <Typography variant="subtitle1">
              What animals will you provide services for?
            </Typography>
            <FormGroup row={true}>
              <FormControlLabel
                control={<Checkbox name="dogs" />}
                value={this.state.dogs}
                onChange={(event) => this.handleInputChange(event, "dogs")}
                label="Dogs"
              />
              <FormControlLabel
                control={<Checkbox name="cats" />}
                value={this.state.cats}
                onChange={(event) => this.handleInputChange(event, "cats")}
                label="Cats"
              />
              <FormControlLabel
                control={<Checkbox name="other" />}
                value={this.state.other}
                onChange={(event) => this.handleInputChange(event, "other")}
                defaultChecked={false}
                label="Others"
              />
            </FormGroup>
            <FormHelperText>Please choose all that apply</FormHelperText>
            <Typography variant="subtitle1">
              Are you home full time Monday-Friday?
            </Typography>
            <RadioGroup
              onChange={(event) => this.handleChange(event, "vet_available")}
              row={true}
              value={String(this.state.vet_available)}
            >
              <FormControlLabel
                control={<Radio name="vet_available" />}
                value={"true"}
                label="Yes"
              />
              <FormControlLabel
                control={<Radio name="vet_available" />}
                value={"false"}
                label="No"
              />
            </RadioGroup>
            <Typography variant="subtitle1">
              How often can you take the animal(s) outside?
            </Typography>
            <FormGroup row={true}>
              <FormControlLabel
                control={<Checkbox name="" />}
                defaultChecked={false}
                value={this.state.zero_two}
                onChange={(event) => this.handleInputChange(event, "zero_two")}
                label="0-2 Hours"
              />
              <FormControlLabel
                control={<Checkbox name="two_four" />}
                defaultChecked={false}
                value={this.state.two_four}
                onChange={(event) => this.handleInputChange(event, "two_four")}
                label="2-4 Hours"
              />
              <FormControlLabel
                control={<Checkbox name="four_eight" />}
                defaultChecked={false}
                value={this.state.four_eight}
                onChange={(event) =>
                  this.handleInputChange(event, "four_eight")
                }
                label="4-8 Hours"
              />
              <FormControlLabel
                control={<Checkbox name="not_available" />}
                defaultChecked={false}
                value={this.state.not_available}
                onChange={(event) =>
                  this.handleInputChange(event, "not_available")
                }
                label="N/A"
              />
            </FormGroup>
            <FormHelperText>Please choose all that apply</FormHelperText>
            <Typography variant="subtitle1">
              What size animals are you comfortable hosting?
            </Typography>
            <FormGroup row={true}>
              <FormControlLabel
                control={<Checkbox name="smCheck" />}
                defaultChecked={false}
                value={this.state.small_dog}
                onChange={(event) => this.handleInputChange(event, "small_dog")}
                label="Small (0-15 lbs)"
              />
              <FormControlLabel
                control={<Checkbox name="mdCheck" />}
                defaultChecked={false}
                value={this.state.medium_dog}
                onChange={(event) =>
                  this.handleInputChange(event, "medium_dog")
                }
                label="Medium (16-40 lbs)"
              />
              <FormControlLabel
                control={<Checkbox name="lgCheck" />}
                defaultChecked={false}
                value={this.state.large_dog}
                onChange={(event) => this.handleInputChange(event, "large_dog")}
                label="Large (41-100 lbs)"
              />
              <FormControlLabel
                control={<Checkbox name="gtCheck" />}
                defaultChecked={false}
                value={this.state.giant_dog}
                onChange={(event) => this.handleInputChange(event, "giant_dog")}
                label="Giant (100 + lbs)"
              />
            </FormGroup>
            <Typography variant="subtitle1">
              Will you host animals younger than 1 years old?
            </Typography>
            <RadioGroup
              onChange={(event) =>
                this.handleChange(event, "pet_younger_than_one")
              }
              row={true}
              value={String(this.state.pet_younger_than_one)}
            >
              <FormControlLabel
                control={<Radio name="youngYes" />}
                name="yesAgeRadio"
                value={"true"}
                label="Yes"
              />
              <FormControlLabel
                control={<Radio name="youngNo" />}
                name="noAgeRadio"
                value={"false"}
                label="No"
              />
            </RadioGroup>
            <Typography variant="subtitle1">
              Will you host animals from multiple families at once?
            </Typography>
            <RadioGroup
              onChange={(event) =>
                this.handleChange(event, "pet_more_than_one_family")
              }
              row={true}
              value={String(this.state.pet_more_than_one_family)}
            >
              <FormControlLabel
                control={<Radio name="multiYesRadio" />}
                value={"true"}
                label="Yes"
              />
              <FormControlLabel
                control={<Radio name="multiNoRadio" />}
                value={"false"}
                label="No"
              />
            </RadioGroup>
            <Grid>
              <Typography variant="subtitle1">
                Please provide a list of equipment that will be used when caring
                for pets:{" "}
              </Typography>
              <br />
              <br />
              <div>
                <TextField
                  fullWidth
                  multiline
                  type="text"
                  id="outlined-basic"
                  label="Optional"
                  variant="outlined"
                  color="secondary"
                  value={this.state.equipment_list}
                  onChange={(event) =>
                    this.handleInputChange(event, "equipment_list")
                  }
                />
              </div>
            </Grid>
            <Grid>
              <Button
                className={classes.button}
                onClick={this.handleBackClick}
                variant="contained"
                color="primary"
              >
                Back
              </Button>
              <Button
                className={classes.button}
                onClick={this.handleContClick}
                variant="contained"
                color="primary"
              >
                Save and Continue
              </Button>
            </Grid>
          </FormControl>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  vtInfoPage2: {
    dogs: false,
    cats: false,
    other: false,
    vet_available: false,
    zero_two: false,
    two_four: false,
    four_eight: false,
    not_available: false,
    small_dog: false,
    medium_dog: false,
    large_dog: false,
    giant_dog: false,
    pet_younger_than_one: false,
    pet_more_than_one_family: false,
    equipment_list: "",

    ...state.vtInfoPage2,
  },
  errors: state.errors,
});

export default withRouter(
  connect(mapStateToProps)(withStyles(styles)(VTPage2))
);
