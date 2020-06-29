import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import FormControl from "@material-ui/core/FormControl"
import {Typography} from "@material-ui/core"
import Button from "@material-ui/core/Button"
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    marginLeft: theme.spacing(20),
    marginRight: theme.spacing(20),
    marginTop: '100px',
  },
  title: {
    textAlign: 'center',
    marginBottom: 50,
    marginTop: 20
  },
  helperText: {
    textAlign: 'center',
  },
  boxes: {
    marginTop: 10,
    marginBottom: 10
  },
  button: {
    margin: "20px 30px 20px 30px",
    height: 45,
    width: 180,
    borderRadius: 12,
  },
  radioAlignment: {
    display: "block",
    margin: "10px"
  },
  loginImage: {
    marginTop: 20,
    marginBottom: 20,
    
    border: "2px",
    borderRadius: "200px"
  }

})

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        {this.props.errors.registrationMessage && (
          <h2 className="alert" role="alert">
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <div>
          <Grid className={classes.title}>
            <FormControl >
              <Typography className={classes.title} variant="h3">Login</Typography>
              <div className={classes.boxes}>
                <TextField id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  name="username"
                  color="secondary"
                  value={this.state.username}
                  onChange={this.handleInputChangeFor("username")}
                />
              </div>
              <div className={classes.boxes}>
                <TextField id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  name="password"
                  color="secondary"
                  value={this.state.password}
                  onChange={this.handleInputChangeFor("password")}
                />
              </div>
              <div>
                <img className={classes.loginImage} src="/images/careTakerDog.png" alt="searchIcon" height="150" width="150" />
              </div>
              <div>
                <Button className={classes.button} onClick={() => { this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' }) }} variant="contained" color="primary" >Register</Button>
                <Button className={classes.button} onClick={this.login} variant="contained" color="primary" >Log In</Button>
              </div>
            </FormControl>
          </Grid>
        </div>

      </div>
    );
  }
  //   return (
  //     <div>
  //       {this.props.errors.loginMessage && (
  //         <h2
  //           className="alert"
  //           role="alert"
  //         >
  //           {this.props.errors.loginMessage}
  //         </h2>
  //       )}
  //       <form onSubmit={this.login}>
  //         <h1>Login</h1>
  //         <div>
  //           <label htmlFor="username">
  //             Username:
  //             <input
  //               type="text"
  //               name="username"
  //               value={this.state.username}
  //               onChange={this.handleInputChangeFor('username')}
  //             />
  //           </label>
  //         </div>
  //         <div>
  //           <label htmlFor="password">
  //             Password:
  //             <input
  //               type="password"
  //               name="password"
  //               value={this.state.password}
  //               onChange={this.handleInputChangeFor('password')}
  //             />
  //           </label>
  //         </div>
  //         <div>
  //           <input
  //             className="log-in"
  //             type="submit"
  //             name="submit"
  //             value="Log In"
  //           />
  //         </div>
  //       </form>
  //       <center>
  //         <button
  //           type="button"
  //           className="link-button"
  //           onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}
  //         >
  //           Register
  //         </button>
  //       </center>
  //     </div>
  //   );
  // }
}



// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});
export default withRouter(connect(mapStateToProps)(withStyles(styles)(LoginPage)));
// export default connect(mapStateToProps)(LoginPage);
