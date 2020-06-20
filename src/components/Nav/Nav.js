import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
 
})


const Nav = (props) => (
  <div className="nav">
    <Link to="/home">
      <img className="logo" src="images/VetTechlogo.png" alt="profile-photo" height="150" width="150" 
      />
    </Link>
    <div className="nav-right">
      <Link className="nav-link" to="/home">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {props.user.id ? 'Home' : 'Login / Register'}
      </Link>

      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id && (
        <>
            <Link  className="nav-link"to="/info">
              Search for services
          </Link>
        </>
      )}
      <Link className="nav-link" to="/about">
        About
      </Link>
      {props.user.id && (
        <>
          <div className="nav-link">
            <Link className="profile" to="/info">
             Profile
            </Link>
          </div>
          <div className = "profile_icon">
            <Link to="/info">
                 <img  src="images/blank-profile-picture.png" alt="profile-photo" height="30" width="30" />
            </Link>
          </div>
          <LogOutButton className="nav-link" />
        </>
      )}
      {/* Always show this link since the about page is not protected */}

    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(Nav));
