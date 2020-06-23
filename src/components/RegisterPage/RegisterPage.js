import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField"
import FormControl from "@material-ui/core/FormControl"
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router"


const styles = theme => ({
  root: {
    marginLeft: theme.spacing(20),
    marginRight: theme.spacing(20),
    marginTop: '100px',
  },
  title: {
    textAlign: 'center',
  },
  helperText: {
    textAlign: 'center',
  },
  button: {
    margin: "20px 30px 20px 30px",
    height: 45,
    width: 180,
    borderRadius: 12,
  },
})



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

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: "REGISTER",
        payload: {
          user_email: this.state.email,
          username: this.state.username,
          phone_number: this.state.phone,
          password: this.state.password,
          hear_about: this.state.hear_about,
          user_type: this.state.user_type,
        },
      });
    } else {
      this.props.dispatch({ type: "REGISTRATION_INPUT_ERROR" });
    }
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props
    return (
      <div>
        {this.props.errors.registrationMessage && (
          <h2 className="alert" role="alert">
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <div className={classes.root}>
        <FormControl  onSubmit={this.registerUser}>
          <h1>Sign up with email!</h1>
          <h5>All fields required*</h5>
          <div>
            <TextField id="outlined-basic"
              label="Email"
              variant="outlined"
              name="user_email"
              color="secondary"
              value={this.state.user_email}
              onChange={this.handleInputChangeFor("user_email")}
            />
          </div>
          <div>
            <TextField id="outlined-basic"
              label="Username"
              variant="outlined"
              name="username"
              color="secondary"
              value={this.state.username}
              onChange={this.handleInputChangeFor("username")}
            />
          </div>
          <div>
            <TextField id="outlined-basic"
              label="Phone"
              variant="outlined"
              name="phone"
              color="secondary"
              value={this.state.phone_number}
              onChange={this.handleInputChangeFor("phone_number")}
            />
          </div>
          <div>
            <TextField id="outlined-basic"
              label="Password"
              variant="outlined"
              name="password"
              color="secondary"
              value={this.state.password}
              onChange={this.handleInputChangeFor("password")} />
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
            // value={this.state.this.state.hear_about}
            //onChange={(event) => this.handleChange(event, "this.state.hear_about")}
            />
          </div>
          <div>
            <input
              type="radio"
              id="client"
              name="user_type"
              value="0"
              onChange={this.handleInputChangeFor("user_type")}
            />
            <label>I want to sign up as a pet owner.</label>
            <br />
            <input
              type="radio"
              id="vet_tech"
              name="user_type"
              value="1"
              onChange={this.handleInputChangeFor("user_type")}
            />
            <label>I want to sign up at a Vet Tech.</label>
          </div>
          <div>
            <input
              className="register"
              type="submit"
              name="submit"
              value="Register"
            />
          </div>
        </FormControl>
        </div>
        {/* <br />
        <button
          type="button"
          className="link-button"
          onClick={() => {
            this.props.dispatch({ type: "SET_TO_LOGIN_MODE" });
          }}
        >
          Login
          </button> */}
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = (state) => ({
  errors: state.errors,
});

// export default connect(mapStateToProps)(RegisterPage);
export default withRouter(connect(mapStateToProps)(withStyles(styles)(RegisterPage)));
