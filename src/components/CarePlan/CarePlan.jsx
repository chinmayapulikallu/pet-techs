import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// material UI imports
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

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
    width: 100,
    height: 100,
  },
});

class CarePlan extends Component {
  //   componentDidMount = () => {
  //     console.log("Log in petcareplan", this.props.petCarePlan);
  // const currentCarePlan = this.props.petCarePlan.find(carePlan => carePlan.id === parseInt(this.props.match.params.id))
  // this.setState({
  //       id: this.props.petCarePlan.id,
  //       pet_name: this.props.petCarePlan.pet_name,
  //       age: this.props.petCarePlan.age,
  //       weight: this.props.petCarePlan.weight,
  //       pet_behavior: this.props.petCarePlan.pet_behavior,
  //       pet_bio: this.props.petCarePlan.pet_bio,
  //       feedings_per_day: this.props.petCarePlan.feedings_per_day,
  //       food_brand: this.props.petCarePlan.food_brand,
  //       amount_per_meal: this.props.petCarePlan.amount_per_meal,
  //       care_equipment: this.props.petCarePlan.care_equipment,
  //     });
  //   };
  state = {
   
    isEditing: false,
   
  };

  handleEditToggle = () => {
    console.log(
      "In edit/save toggle",
      this.state,
      "redux state",
      this.props.petCarePlan
    );
        this.props.dispatch({
            type: "SAVE_PET_DETAILS", 
            payload: this.props.petCarePlan,
        })
    this.setState({
      isEditing: !this.state.isEditing,
    });
  };

  handleInputChange = (property) => (event) => {
    console.log("in handleinputchange", event.target.value, this.state);
    this.props.dispatch({
        type: "UPDATE_PET_CARE_PLAN", payload: {
            [property]: event.target.value,
        }
    })
  };

  render() {
    return (
      <Container>
        <img
          className={this.props.classes.profileImage}
          src="images/blank-profile-picture.png"
          alt="profile"
          height="150"
          width="150"
        />
        <br />
        <Typography variant="h2" className={this.props.classes.profileCenter}>
          Care plan for {this.props.petCarePlan.pet_name}!
        </Typography>

        <Card>
          <CardContent>
            <div>
              
              <Typography>General Info: 
                {this.state.isEditing ? (
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    color="secondary"
                    label="Pet Info"
                    value={this.props.petCarePlan.pet_bio}
                    onChange={this.handleInputChange("pet_bio")}
                  />
                ) : (
                  this.props.petCarePlan.pet_bio
                )}
                
              </Typography>
            </div>
            <Typography>
              Pet Feeding Info: I like to eat{" "}
              {this.props.petCarePlan.feeding_per_day} meals per day, and my
              favorite food is {this.props.petCarePlan.food_brand}. Please feed
              me {this.props.petCarePlan.amount_per_meal} for each meal!
            </Typography>

            <Typography>
              Pet Behavior Info: {this.props.petCarePlan.pet_behavior}.
            </Typography>
            <Typography>
              Pet Equipment Info: {this.props.petCarePlan.care_equipment}.
            </Typography>
            <Typography>
              Pet Stats: I am a {this.props.petCarePlan.sex}{" "}
              {this.props.petCarePlan.breed}. I weight{" "}
              {this.props.petCarePlan.weight} pounds and I am{" "}
              {this.props.petCarePlan.age} years old.{" "}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={this.closeWindow}
            >
              Close Window
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleEditToggle}
            >
              {this.state.isEditing ? "Save" : "Edit"}
            </Button>
          </CardContent>
        </Card>
      </Container>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  //   clientInfo: state.clientInfo,
  //   petInfo: state.petInfo,
  //   user: state.user,
  petCarePlan: reduxState.petCarePlan,
});
export default withStyles(useStyles)(
  withRouter(connect(mapStateToProps)(CarePlan))
);
