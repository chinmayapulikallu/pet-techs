import React, { Component } from "react";
import { connect } from "react-redux";

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
    return (
      <div>
        {this.props.errors.registrationMessage && (
          <h2 className="alert" role="alert">
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form onSubmit={this.registerUser}>
          <h1>Sign up with email!</h1>
          <h5>All fields required*</h5>
          <div>
            Email:
            <input
              type="text"
              name="user_email"
              value={this.state.user_email}
              onChange={this.handleInputChangeFor("user_email")}
            />
          </div>
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor("username")}
              />
            </label>
          </div>
          <div>
            Phone:
            <input
              type="number"
              name="phone_number"
              value={this.state.phone_number}
              onChange={this.handleInputChangeFor("phone_number")}
            />
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor("password")}
              />
            </label>
          </div>
          <h3>How did you hear about Pet Techs?</h3>
          <div>
            <textarea
              type="text"
              name="hear_about"
              rows="4"
              cols="50"
              placeholder="Please tell us how you heard about Pet Techs."
              onChange={this.handleInputChangeFor("hear_about")}
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
        </form>
        <br/>
          <button
            type="button"
            className="link-button"
            onClick={() => {
              this.props.dispatch({ type: "SET_TO_LOGIN_MODE" });
            }}
          >
            Login
          </button>
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

export default connect(mapStateToProps)(RegisterPage);
