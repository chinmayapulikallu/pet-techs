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

class CarePlan extends Component {

  state = {
      editable: false,
      id: '',
      pet_name: '',
      age: '',
      weight: '',
      pet_behavior: '',
      pet_bio: '',
      feedings_per_day: '',
      food_brand: '',
      amount_per_meal: '',
      care_equipment: '',




  }
  componentDidMount = () => {};

  render() {
    return (
      <Container>
        <img
          src="images/blank-profile-picture.png"
          alt="profile"
          height="150"
          width="150"
        />
        <h1>Care plan for {this.props.petCarePlan.pet_name}!</h1>

        <Card>
          <CardContent>
            <Typography>
              General Info: {this.props.petCarePlan.pet_bio}.
            </Typography>
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
            <Button variant="contained" color="primary">
              Edit CarePlan
            </Button>
          </CardContent>
        </Card>
      </Container>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  clientInfo: reduxState.clientInfo,
  petInfo: reduxState.petInfo,
  user: reduxState.user,
  petCarePlan: reduxState.petCarePlan,
});
export default withRouter(
  connect(mapStateToProps)(withStyles({ withTheme: true })(CarePlan))
);
