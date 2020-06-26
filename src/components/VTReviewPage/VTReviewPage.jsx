import React, { Component } from 'react';
import { connect } from 'react-redux';


import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";



const styles = theme => ({
  root: {
    // flexGrow: 1,
    // marginLeft: theme.spacing(45),
    // marginRight: theme.spacing(45),
    marginTop: '100px',
  },
  title: {
    textAlign: 'center',
  },
  buttons: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  itemCenter: {
    textAlign: 'center',
    justifyContent: "center",
    marginTop: "20px",
  },

})


class VTReviewPage extends Component {
  state = {
    ...this.props.vtInfo,
  }

  handleEditVTPage1Button = () => {
    console.log('edit clicked!')
    this.props.onEditInfo();
  }
  handleEditVTPage2Button = () => {
    console.log('edit clicked!')
    this.props.onEditPreferences();
  }
  handleEditVTPage3Button = () => {
    console.log('edit clicked!')
    this.props.onEditCert();
  }
  handleSaveButton = () => {
    console.log('save clicked!')
    console.log('send this VT data to saga:', this.state)
    // this.props.dispatch({
    //     type: "ADD_VT",
    //     payload:  this.state 
    // })
    this.props.history.push("/home");
  }


  render() {
    const { classes } = this.props;
    let provideServices;
    if (this.state.dog === true) {
      provideServices = this.state.dog;
    } else if (this.state.cat === true) {
      provideServices += this.state.cat;
    } else if (this.state.other === true) {
      provideServices += this.state.other;
    }

    let workHour;
    if (this.state.hourSelectOne === true) {
      workHour = this.state.hourSelectOne;
    } else if (this.state.hourSelectTwo === true) {
      workHour += this.state.hourSelectTwo;
    } else if (this.state.hourSelectThree === true) {
      workHour += this.state.hourSelectThree;
    } else if (this.state.hourSelectFour === true) {
      workHour += this.state.hourSelectFour;
    }


    return (
      <Container className={classes.root} maxWidth="sm">
        {/* <h1>{JSON.stringify(this.state.sleep_over)}</h1> */}
        <h1 className={classes.title}>Vet tech review</h1>
        <p>
          Home address: <spand>{this.state.home_address_house}</spand>
        </p>
        <p>
          Apartment or Suite #: <span>{this.state.apt_suite}</span>
        </p>
        <p>
          City: <span>{this.state.city}</span>
        </p>
        <p>
          State: <span>{this.state.state}</span>
        </p>
        <p>
          Zip Code: <span>{this.state.zipcode}</span>
        </p>
        <p>
          Bio: <span>{this.state.bio}</span>
        </p>

        <p>
          Pet Sleepover: <span>{this.state.sleep_over}</span>
        </p>
        <p>
          Pet Boarding: <span>{this.state.boarding}</span>
        </p>
        <p>
          Drop In Care: <span>{this.state.dropin_care}</span>
        </p>
        <p>
          Hospice Care: <span>{this.state.hospice}</span>
        </p>
        <Grid className={classes.itemCenter}>
          <Button
            className={classes.buttons}
            variant="contained"
            color="primary"
            onClick={this.handleEditVTPage1Button}
          >
            Edit Basic Infomation
              </Button>
        </Grid>

        <p>
          What animals will you provide services for?{" "}
          <span>{provideServices}</span>
        </p>
        <p>
          Are you home full time Monday-Friday? <span>{workHour}</span>
        </p>
        <p>How often can you take the animal(s) outside? </p>
        <p>How often can you take the animal(s) outside? </p>
        <p>What size animals are you comfortable hosting? </p>
        <p>Will you host animals younger than 1 years old? </p>
        <p>Will you host animals from multiple families at once?</p>
        <p>
          Please provide a list of equipment that will be used when caring
              for pets:{" "}
        </p>
        <Grid className={classes.itemCenter}>
          <Button
            className={classes.buttons}
            variant="contained"
            color="primary"
            onClick={this.handleEditVTPage2Button}
          >
            Edit Services
              </Button>
        </Grid>

        <p>Year of professional experience caring for pets: </p>
        <p>Education/Degree/Certifications: </p>
        <p>Current job title:</p>
        <p>Areas of professional expertise: </p>
        <p>Brief bio about yourself: </p>
        <h4>Additional Details: </h4>
        <p>Do you know CPR and/or animal first aid? </p>
        <p>Can you administer oral medications to animals? </p>
        <p>Can you administer injected medications to animal? </p>
        <p>
          Do you have experience with caring for older or senior animals?{" "}
        </p>
        <p>Do you have experience caring for special needs animals?</p>
        <p>
          Can you provied daily exercise for high energy animals or
              behavioral needs?{" "}
        </p>
        <p>
          Are you willing to accept services that are longer than one week
              with animals?{" "}
        </p>
        <p>Do you offer diabetic and insulin care? </p>
        <Grid className={classes.itemCenter}>
          <Button
            className={classes.buttons}
            variant="contained"
            color="primary"
            onClick={this.handleEditVTPage3Button}
          >
            Edit Certifications
              </Button>
        </Grid>

        <Grid className={classes.itemCenter}>
          <Button
            className={classes.buttons}
            variant="contained"
            color="primary"
            onClick={this.handleSaveButton}
          >
            Complete
              </Button>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  vtInfo: {
    home_address_house: "",
    apt_suite: "",
    city: "",
    state: "",
    zipcode: "",
    profile_img: "",
    sleep_over: false,
    boarding: false,
    dropin_care: false,
    hospice: false,
    bio: "",

    dog: false,
    cat: false,
    other: false,
    hourSelectOne: false,
    hourSelectTwo: false,
    hourSelectThree: false,
    hourSelectFour: false,
    smallAnimal: false,
    mediumAnimal: false,
    largeAnimal: false,
    giantAnimal: false,
    youngAnimals: '',
    multipleAnimals: '',
    optionalEquipment: '',

    experienceYear: '',
    certifications: '',
    currentJob: '',
    expertise: '',
    bioYourself: '',
    cpr: false,
    oralMedication: false,
    injectableMedication: false,
    expOlderPet: false,
    expSpecialPet: false,
    dailyExercise: false,
    petLongerThanAWeek: false,
    diabeticInsulinCare: false,
    ...state.vtInfo,
  },
  error: state.errors,
})
export default withRouter(connect(mapStateToProps)(withStyles(styles, { withTheme: true })(VTReviewPage)));
