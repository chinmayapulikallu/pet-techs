import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { withRouter } from "react-router";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    marginLeft: theme.spacing(20),
    marginRight: theme.spacing(20),
    marginTop: "100px",
  },
  title: {
    textAlign: "center",
    marginBottom: 50,
    marginTop: 20,
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
  loginImage: {
    marginTop: 20,
    marginBottom: 20,

    border: "2px",
    borderRadius: "200px",
  },
});

class LoginPage extends Component {
  state = {
    username: "",
    password: "",
  };

  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      const redirectPage =
        this.props.user.user_type === 0 ? "/clientdashboard" : "/vtdashboard";
      this.props.history.push(redirectPage);
    }
  }

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: "LOGIN",
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: "LOGIN_INPUT_ERROR" });
    }
  };

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };
  handleJoinClick = () => {
    this.props.history.push("/register");
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
            <FormControl>
              <Typography className={classes.title} variant="h3">
                Login
              </Typography>
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
                  type="password"
                  label="Password"
                  variant="outlined"
                  name="password"
                  color="secondary"
                  value={this.state.password}
                  onChange={this.handleInputChangeFor("password")}
                />
              </div>
              <div>
                <img
                  className={classes.loginImage}
                  src="/images/careTakerDog.png"
                  alt="searchIcon"
                  height="150"
                  width="150"
                />
              </div>
              <div>
                <Button
                  className={classes.button}
                  onClick={this.login}
                  variant="contained"
                  color="primary"
                >
                  Log In
                </Button>
              </div>
              <div>
                <Link
                  className={classes.button}
                  onClick={this.handleJoinClick}
                  variant="contained"
                  color="secondary"
                >
                  Register
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
  user: state.user,
  errors: state.errors,
});

export default withRouter(
  connect(mapStateToProps)(withStyles(styles)(LoginPage))
);
