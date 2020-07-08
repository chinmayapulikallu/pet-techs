import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
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
  boxes: {
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    margin: "20px 30px 20px 30px",
    height: 45,
    width: 180,
    borderRadius: 12,
  },
  radioAlignment: {
    display: "block",
    margin: "10px",
  },
});

class RegisterPage extends Component {
  state = {
    username: "",
    password: "",
    user_email: "",
    phone_number: "",
    hear_about: "",
    user_type: "",
  };

  registerUser = (event) => {
    event.preventDefault();

    if (
      this.state.user_email &&
      this.state.username &&
      this.state.phone_number &&
      this.state.password &&
      this.state.hear_about &&
      this.state.user_type
    ) {
      this.props.dispatch({
        type: "REGISTER",
        payload: {
          user_email: this.state.user_email,
          username: this.state.username,
          phone_number: this.state.phone_number,
          password: this.state.password,
          hear_about: this.state.hear_about,
          user_type: this.state.user_type,
        },
      });
      const redirectPage =
        this.state.user_type === "0"
          ? "/client-registration"
          : "/vet-tech-registration";
      this.props.history.push(redirectPage);
    } else {
      this.props.dispatch({ type: "REGISTRATION_INPUT_ERROR" });
    }
  };

  handleInputChangeFor = (property) => (event) => {
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
  handSignInClick = () => {
    this.props.history.push("/login");
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {this.props.errors.registrationMessage && (
          <h2 className="alert" role="alert">
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <div>
          <Grid className={classes.title}>
            <FormControl onSubmit={this.registerUser}>
              <Typography className={classes.title} variant="h3">
                Sign up with email!
              </Typography>
              <Typography className={classes.title} variant="h6">
                *All fields required
              </Typography>
              <div className={classes.boxes}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  name="user_email"
                  color="secondary"
                  value={this.state.user_email}
                  onChange={this.handleInputChangeFor("user_email")}
                />
              </div>
              <div className={classes.boxes}>
                <TextField
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  name="username"
                  color="secondary"
                  value={this.state.username}
                  onChange={this.handleInputChangeFor("username")}
                />
              </div>
              <div className={classes.boxes}>
                <TextField
                  id="outlined-basic"
                  label="Phone"
                  variant="outlined"
                  name="phone"
                  color="secondary"
                  value={this.state.phone_number}
                  onChange={this.handleInputChangeFor("phone_number")}
                />
              </div>
              <div className={classes.boxes}>
                <TextField
                  id="outlined-basic"
                  type="password"
                  label="Password"
                  variant="outlined"
                  name="password"
                  color="secondary"
                  value={this.state.password}
                  onChange={this.handleInputChangeFor("password")}
                />
              </div>
              <h3>How did you hear about Pet Techs?</h3>
              <div>
                <TextField
                  fullWidth
                  multiline
                  type="text"
                  id="outlined-basic"
                  label="How did you hear about Pet Techs?"
                  variant="outlined"
                  color="secondary"
                  value={this.state.hear_about}
                  onChange={this.handleInputChangeFor("hear_about")}
                />
              </div>

              <FormControl component="fieldset">
                <RadioGroup
                  defaultValue="male"
                  aria-label="gender"
                  className={classes.radioAlignment}
                  name="customized-radios"
                  onChange={this.handleInputChangeFor("user_type")}
                >
                  <FormControlLabel
                    value="0"
                    control={<Radio />}
                    label="I want to sign up as a pet owner"
                  />
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="I want to sign up as a Vet Tech"
                  />
                </RadioGroup>
              </FormControl>

              <div>
                <Button
                  className={classes.button}
                  type="submit"
                  name="submit"
                  value="Register"
                  onClick={this.registerUser}
                  variant="contained"
                  color="primary"
                >
                  Register
                </Button>
              </div>
              <div>
                <Link
                  className={classes.button}
                  onClick={this.handSignInClick}
                  variant="contained"
                  color="secondary"
                >
                  Already have an account?
                </Link>
              </div>
            </FormControl>
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default withRouter(
  connect(mapStateToProps)(withStyles(styles)(RegisterPage))
);

