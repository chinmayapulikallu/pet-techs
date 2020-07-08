import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { withStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

const styles = (theme) => ({
  root: {
    backgroundColor: "#f7f7f7",
    borderBottom: "2px solid #195C60",
    backgroundSize: "cover",
    position: "fixed",
    marginTop: "0px",
    width: "100%",
    height: "70px",
    top: "0px",
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    float: "left",
    position: "fixed",
    top: "7px",
    left: 5,
    marginBottom: "50%",
  },
  img: {
    borderRadius: "50%",
  },
});

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

class Nav extends Component {
  state = {
    notifiClick: true,
  };
  handleOnClickNotifi = () => {
    this.setState({
      notifiClick: false,
    });
  };

  render() {
    const { classes, clientInfo, user, clientRequest } = this.props;
    return (
      <HideOnScroll {...this.props}>
        <div className={classes.root}>
          <Link to="/landingpg">
            <img
              className={classes.logo}
              src="images/VetTechlogo.png"
              alt="profile"
              height="130"
              width="130"
            />
          </Link>
          <div className="nav-right">
            {user.id && (
              <>
                <Link
                  className="nav-link"
                  to={
                    this.props.isVetTech ? `/vtdashboard` : `/clientdashboard`
                  }
                >
                  Dashboard
                </Link>
                {!this.props.isVetTech && (
                  <Link className="nav-link" to="/search">
                    Search for Services
                  </Link>
                )}
              </>
            )}
            <Link className="nav-link" to="/about">
              About
            </Link>
            {user.id && (
              <>
                <div className="nav-link">
                  <Link
                    className="profile"
                    to={
                      this.props.isVetTech
                        ? `/vt-profile/${user.id}`
                        : `/client-profile/${user.id}`
                    }
                  >
                    {user.username}
                  </Link>
                </div>
                <div className="profile_icon">
                  <Link to={`/client-profile/${user.id}`}></Link>
                </div>
                <LogOutButton className="nav-link" />
              </>
            )}
          </div>
        </div>
      </HideOnScroll>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  user: reduxState.user,
  clientInfo: reduxState.clientInfo,
  isVetTech: reduxState.user.user_type === 1,
  clientRequest: reduxState.clientRequestReducer,
});

export default connect(mapStateToProps)(
  withStyles(styles, { withTheme: true })(Nav)
);
