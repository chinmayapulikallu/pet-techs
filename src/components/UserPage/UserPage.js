import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

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

const mapStateToProps = (reduxState) => ({
  user: reduxState.user,
});

export default withRouter(connect(mapStateToProps)(UserPage));
