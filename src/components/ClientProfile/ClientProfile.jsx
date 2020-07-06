import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";

import { withRouter } from "react-router-dom";
import "./ClientProfile.css";
import ClientProfileDetail from "../ClientProfileDetail/ClientProfileDetail";

const styles = (theme) => ({
  root: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: "70px",
    flexGrow: 1,
  },
  paddingTop: {
    paddingTop: 50,
  },
  title: {
    backgroundColor: "#faefec",
    paddingTop: 85,
    width: "100%",
  },
  name: {
    textAlign: "center",
  },

  items: {
    padding: theme.spacing(2),
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "block",
  },
  img: {
    borderRadius: "50%",
    position: "absolute",
    top: 170,
    left: 100,
  },
  clientInfo: {
    marginBottom: 0,
    position: "absolute",
    top: 160,
    left: 330,
  },
  client_content: {
    marginTop: 200,
  },
  editButton: {
    display: "flex",
    justifyContent: "right",
    marginLeft: "85%",
  },
});

class ClientProfile extends Component {
  componentDidMount() {
    const currentId = this.props.match.params.id;
    console.log("-----> Current client", currentId);
    this.props.dispatch({
      type: "GET_CLIENT_DATA",
      payload: { id: currentId },
    });
  }

  render() {
    // console.log('->client profile', this.setClientData())

    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {this.props.clientInfo.map((client) => {
          return (
            <div key={client.user_id}>
              <ClientProfileDetail client={client} />
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  clientInfo: reduxState.clientInfo,
  petInfo: reduxState.petInfo,
  user: reduxState.user,
});

export default withRouter(
  connect(mapStateToProps)(
    withStyles(styles, { withTheme: true })(ClientProfile)
  )
);
