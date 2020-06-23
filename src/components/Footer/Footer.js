import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';


import { withStyles } from '@material-ui/core/styles';
import Slide from "@material-ui/core/Slide";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';



const styles = theme => ({
  root: {
    backgroundColor: '#f7f7f7',
    backgroundSize: 'cover',
    marginTop: 50,
    width: '100%',
    height: '70px',
    // top: '0px',
    // zIndex: theme.zIndex.drawer + 1,
  },
  icons: {
    float: 'right',
    // position: 'fixed',
    marginTop: 20,
    marginRight: 20,
    // marginBottom: '50%',
  }

})

// function HideOnScroll(props) {
//   const { children, window } = props;
//   const trigger = useScrollTrigger({ target: window ? window() : undefined });

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }



class Footer extends Component {
  state = {
    ...this.props,
  }

  render() {
    const { classes } = this.props;
    return (
      // <HideOnScroll {...this.props}>

        <div className={classes.root}>

          {/* Show the link to the info page and the logout button if the user is logged in */}
          {this.state.user.id && (
            <>
              <div>
                <Link className="nav-link" to="/">
                  Home
              </Link>
              <Link className="nav-link" to="/">
                  Browse
              </Link>
              <Link className="nav-link" to="/">
                  About
              </Link>
              <Link className="nav-link" to="/">
                  F.A.Q.
              </Link>
              <Link className="nav-link" to="/">
                  Leanring & Resources
              </Link>

              </div>
              <div className={classes.icons}>
                <Link to="/info">
                  <img src="images/blank-profile-picture.png" alt="profile" height="30" width="30" />
                </Link>
              </div>
            </>

          )}
           {this.state.user.id && (
            <>
              <div className="nav-link">
                <Link className="profile" to="/info">
                  Profile
              </Link>
              </div>
              <div className="profile_icon">
                <Link to="/info">
                  <img src="images/blank-profile-picture.png" alt="profile" height="30" width="30" />
                </Link>
              </div>
              <LogOutButton className="nav-link" />
            </>
          )}
        </div>
      // </HideOnScroll>

    )
  }

};

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(Footer));
