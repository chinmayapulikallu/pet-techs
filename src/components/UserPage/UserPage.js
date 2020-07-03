import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => {
  // navigate user to correct homepage based on type
  if (props.user) {
    switch (props.user.user_type) {
      case 0:
        props.history.push(`/clientdashboard`);
        break;
      case 1:
        props.history.push(`/vtdashboard`);
        break;
      default:
        props.history.push(`/clientdashboard`);
        break;
    }
  }

  return <></>;
};

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = (reduxState) => ({
  user: reduxState.user,
});

// this allows us to use <App /> in index.js
export default withRouter(connect(mapStateToProps)(UserPage));
