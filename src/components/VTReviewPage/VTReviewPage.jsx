import React, { Component } from 'react';
import { connect } from 'react-redux';


import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import VTPage1 from '../VTPage1/VTPage1';



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
  // state = {
  //   ...this.props.vtInfo,
  // }

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
    this.props.dispatch({
      type: "VT_REGISTER",
      payload:
      {
        ...this.props.vtInfoPage1,
        ...this.props.vtInfoPage2,
        ...this.props.vtInfoPage3

      }
    })
    this.props.history.push("/vtdashboard");
  }


  render() {
    const { classes, vtInfoPage1, vtInfoPage2, vtInfoPage3 } = this.props;

    // let provideServices;
    // if (this.state.dog === true) {
    //   provideServices = this.state.dog;
    // } else if (this.state.cat === true) {
    //   provideServices += this.state.cat;
    // } else if (this.state.other === true) {
    //   provideServices += this.state.other;
    // }

    // let workHour;
    // if (this.state.hourSelectOne === true) {
    //   workHour = this.state.hourSelectOne;
    // } else if (this.state.hourSelectTwo === true) {
    //   workHour += this.state.hourSelectTwo;
    // } else if (this.state.hourSelectThree === true) {
    //   workHour += this.state.hourSelectThree;
    // } else if (this.state.hourSelectFour === true) {
    //   workHour += this.state.hourSelectFour;
    // }



    return (
      <Container className={classes.root} maxWidth="sm">
        <h1>{JSON.stringify(vtInfoPage1)}</h1>
        <h1>{JSON.stringify(vtInfoPage2)}</h1>
        {/* <h1>{JSON.stringify(vtInfoPage3)}</h1> */}


        <h1 className={classes.title}>Vet tech review</h1>
        <p>
          Your name: <spand>{vtInfoPage1.vet_name}</spand>
        </p>
        <p>
          Home address: <spand>{vtInfoPage1.home_address_house}</spand>
        </p>
        <p>
          Apartment or Suite #: <span>{vtInfoPage1.apt_suite}</span>
        </p>
        <p>
          City: <span>{vtInfoPage1.city}</span>
        </p>
        <p>
          State: <span>{vtInfoPage1.state}</span>
        </p>
        <p>
          Zip Code: <span>{vtInfoPage1.zipcode}</span>
        </p>
        <p>
          Bio: <span>{vtInfoPage1.about_vet}</span>
        </p>

        <p>
          Pet Sleepover: <span>{vtInfoPage1.sleep_over}</span>
        </p>
        <p>
          Pet Boarding: <span>{vtInfoPage1.boarding}</span>
        </p>
        <p>
          Drop In Care: <span>{vtInfoPage1.dropin_care}</span>
        </p>
        <p>
          Hospice Care: <span>{vtInfoPage1.hospice}</span>
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
          <span>{vtInfoPage2.dogs ? "True" : "False"}</span>
          <span>{vtInfoPage2.cats ? "True" : "False"}</span>
          <span>{vtInfoPage2.other ? "True" : "False"}</span>

        </p>
        <p>
          Are you home full time Monday-Friday? <span>{vtInfoPage2.vet_available ? "True" : "False"}</span>
        </p>
        <p>How often can you take the animal(s) outside? </p> <span>{vtInfoPage2.vet_available ? "True" : "False"}</span>
        <p>How often can you take the animal(s) outside? </p> <span>{vtInfoPage2.zero_two ? "True" : "False"}</span>  <span>{vtInfoPage2.two_four ? "True" : "False"}</span>  <span>{vtInfoPage2.four_eight ? "True" : "False"}</span> <span>{vtInfoPage2.not_available ? "True" : "False"}</span>
        <p>What size animals are you comfortable hosting? </p> <span>{vtInfoPage2.small_dog ? "True" : "False"}</span>
        <span>{vtInfoPage2.medium_dog ? "True" : "False"}</span>
        <span>{vtInfoPage2.large_dog ? "True" : "False"}</span>
        <span>{vtInfoPage2.giant_dog ? "True" : "False"}</span>
        <p>Will you host animals younger than 1 years old? </p> <span>{vtInfoPage2.pet_younger_than_one ? "True" : "False"}</span>
        <p>Will you host animals from multiple families at once?</p> <span>{vtInfoPage2.pet_more_than_one_family ? "True" : "False"}</span>
        <p>
          Please provide a list of equipment that will be used when caring
              for pets:{" "} <span>{vtInfoPage2.equipment_list ? "True" : "False"}</span>
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

        <p>Year of professional experience caring for pets: </p> <span>{vtInfoPage3.experience}</span>
        <p>Education/Degree/Certifications: </p> <span>{vtInfoPage3.certifications}</span>
        <p>Current job title:</p><span>{vtInfoPage3.current_job_title}</span>
        <p>Areas of professional expertise: </p> <span>{vtInfoPage3.expertise}</span>
        <p>Brief bio about yourself: </p><span>{vtInfoPage3.bioYourself}</span>
        <h4>Additional Details: </h4>
        <p>Do you know CPR and/or animal first aid? </p> <span>{vtInfoPage2.CPR_first_aid ? "True" : "False"}</span>
        <p>Can you administer oral medications to animals? </p> <span>{vtInfoPage2.oral_medication ? "True" : "False"}</span>
        <p>Can you administer injected medications to animal? </p>  <span>{vtInfoPage2.injectable_medication ? "True" : "False"}</span>
        <p>
          Do you have experience with caring for older or senior animals?{" "} <span>{vtInfoPage2.exp_older_pet ? "True" : "False"}</span>
        </p>
        <p>Do you have experience caring for special needs animals?</p> <span>{vtInfoPage2.exp_special_pet ? "True" : "False"}</span>
        <p>
          Can you provied daily exercise for high energy animals or
              behavioral needs?{" "} <span>{vtInfoPage2.daily_exercise ? "True" : "False"}</span>
        </p>
        <p>
          Are you willing to accept services that are longer than one week
              with animals?{" "}  <span>{vtInfoPage2.pet_longer_than_a_week ? "True" : "False"}</span>
        </p>
        <p>Do you offer diabetic and insulin care? </p> <span>{vtInfoPage2.diabetic_insulin_care ? "True" : "False"}</span>
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

const mapStateToProps = (reduxState) => ({
  vtInfoPage1: reduxState.vtInfoPage1,
  vtInfoPage2: reduxState.vtInfoPage2,
  vtInfoPage3: reduxState.vtInfoPage3,
})
export default withRouter(connect(mapStateToProps)(withStyles(styles, { withTheme: true })(VTReviewPage)));
