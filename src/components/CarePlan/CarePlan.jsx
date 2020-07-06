import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CarePlanDetail from "../CarePlanDetail/CarePlanDetail";
// material UI imports
import { withStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";

const useStyles = (theme) => ({
  root: {
    marginTop: 100,
    marginBottom: 40,
    textAlign: "center",
  },
  cardSearch: {
    width: 300,
    height: 200,
  },
  profileCenter: {
    height: 200,
    // width: 600,
    //    marginLeft: 300,
    textAlign: "center",
  },
  profileImage: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 0,
    paddingTop: 25,
    // width: 100,
    // height: 100,
  },
  container: {
    marginTop: 50,
  },
  itemCenter: {
    textAlign: "center",
    justifyContent: "center",
    marginTop: "20px",
  },
});

class CarePlan extends Component {
  state = {
    isEditing: false,
    ...this.props.petCarePlan,
  };
  componentDidMount() {
    // const currentPet = this.props.careplan.find(client => client.user_id === parseInt(this.props.match.params.id))
    this.props.dispatch({
      type: "GET_PET_CARE_PLAN",
      payload: { id: this.props.match.params.id },
    });

        console.log("------------>reducer:", this.props.match.params.id);
    }
    render() {
        const { classes } = this.props;
        console.log('-------: ', this.state)
        return (
            <Container className={classes.container}>
                <br />
                <br />
                <br />

                {/* {JSON.stringify(this.props.petCarePlan)} */}
                {this.props.petCarePlan.map((careplan) => {
                    return (
                        <div key={careplan.id}>
                            <CarePlanDetail
                                careplan={careplan}
                                isEditing={this.state.isEditing}
                                isVetTech={this.props.isVetTech}
                            />
                        </div>
                    )
                })}
            </Container>
        );
    }
}
const mapStateToProps = (state) => ({
    petCarePlan: state.petCarePlan,

});
export default withStyles(useStyles)(
  withRouter(connect(mapStateToProps)(CarePlan))
);
